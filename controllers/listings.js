const Listing = require("../models/listing.js");
const { countries } = require("../public/js/countries.js");

module.exports.index = async (req, res, next) => {
  let listingDB = await Listing.find({});
  res.render("./listing/index.ejs", { listingDB });
};

module.exports.renderNewListingForm = (req, res) => {
  res.render("./listing/newlisting.ejs", { countries });
};

module.exports.showListing = async (req, res) => {
  let { id } = req.params;
  let singleListing = await Listing.findById(id)
    .populate({ path: "reviews", populate: { path: "author" } })
    .populate("owner");
  if (!singleListing) {
    req.flash("error", "Listing You Requested is Not Found!");
    res.redirect("/listing");
  }
  res.render("./listing/showlisting.ejs", { singleListing });
};

module.exports.editListing = async (req, res) => {
  let { id } = req.params;
  let listing = await Listing.findById(id);
  if (!listing) {
    req.flash("error", "Listing Not Found!");
    return res.redirect("/listing");
  }
  
  // Update all fields except owner
  Object.assign(listing, req.body.listing);
  
  if (typeof req.file !== "undefined") {
    let url = req.file.path;
    let filename = req.file.filename;
    listing.image = { url, filename };
  }
  
  await listing.save();
  req.flash("success", "Listing Updated!");
  res.redirect(`/listing/${id}`);
};

module.exports.deleteListing = async (req, res) => {
  let { id } = req.params;
  await Listing.findByIdAndDelete(id);
  req.flash("success", "Listing Deleted!");
  res.redirect("/listing");
};

module.exports.renderEditListingForm = async (req, res) => {
  let { id } = req.params;
  let editListing = await Listing.findById(id);
  if (!editListing) {
    req.flash("error", "Listing You Requested is Not Found!");
    res.redirect("/listing");
  }
  res.render("./listing/editlisting.ejs", { editListing, countries });
};

module.exports.createListing = async (req, res, next) => {
  let url = req.file.path;
  let filename = req.file.filename;
  let addListing = new Listing(req.body.listing);
  addListing.owner = req.user._id;
  addListing.image = { url, filename };
  await addListing.save();
  req.flash("success", "New Listing Created!");
  res.redirect("/listing");
};
