const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");


const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.MONGO_URI;
// const uri ="mongodb+srv://ntfseo:ntfseopass@nftseo.e1zbadu.mongodb.net/?retryWrites=true&w=majority";


const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
    await client.connect();
    /* Seo site collection */
    const websiteCollections = client.db("seoWebsite").collection("websiteList");
    const packageCollections = client.db("seoWebsite").collection("packages");
    const packageTitleCollections = client.db("seoWebsite").collection("packagesTitle");
    const orderCollections = client.db("seoWebsite").collection("orders");
    const paypalEmailCollections = client.db("seoWebsite").collection("email");
    const GeneralCollections = client.db("seoWebsite").collection("general");
    const AboutUsOptionCollections = client.db("seoWebsite").collection("AboutUsOption");
    const BannerOptionCollections = client.db("seoWebsite").collection("Banner");
    const SpecialityOptionCollections = client.db("seoWebsite").collection("Speciality");
    const WhyChooseOptionCollections = client.db("seoWebsite").collection("WhyChooseOption");
    const RoadMapOptionCollections = client.db("seoWebsite").collection("roadMap");
    const TeamOptionCollections = client.db("seoWebsite").collection("team");
    const TeamTitleOptionCollections = client.db("seoWebsite").collection("teamTitle");
    const TestimonialOptionCollections = client.db("seoWebsite").collection("testimonials");
    const TestimonialTitleOptionCollections = client.db("seoWebsite").collection("testimonialsTitle");
    const FaqsOptionCollections = client.db("seoWebsite").collection("faqs");
    const FaqsTitleCollections = client.db("seoWebsite").collection("faqsTitle");
    const FooterCollections = client.db("seoWebsite").collection("footer");
    const FooterLinkCollections = client.db("seoWebsite").collection("footerLink");
    const sliderCollections = client.db("seoWebsite").collection("slider");
    const ContactPageCollections = client.db("seoWebsite").collection("contactPage");
    const ContactMessageCollections = client.db("seoWebsite").collection("contactMessage");
    const TicketCollections = client.db("seoWebsite").collection("Ticket");
    const TicketReplyCollections = client.db("seoWebsite").collection("TicketReply");
    const newsLetterCollections = client.db("seoWebsite").collection("newsLetter");
    const userCollection = client.db("seoWebsite").collection("users");
    const featurePageCollections = client.db("seoWebsite").collection("features");
    const OurSolutionsCollections = client.db("seoWebsite").collection("OurSolutions");
    const OurSolutionsTitleCollections = client.db("seoWebsite").collection("OurSolutionstitle");

    const AboutCompanyTitleCollections = client.db("seoWebsite").collection("AboutCompany");
    const AboutCompanyCollections = client.db("seoWebsite").collection("AboutCompanyTitle");
    const CouterOptionTitleCollections = client.db("seoWebsite").collection("CouterOption");
    const OurservicesCollections = client.db("seoWebsite").collection("Ourservices");
    const OurservicesTitleCollections = client.db("seoWebsite").collection("OurserviceTitle");
    const FeatureTwoCollections = client.db("seoWebsite").collection("FeatureTwo");
    const CtaCollections = client.db("seoWebsite").collection("CtaList");
    const VideosSectionCollections = client.db("seoWebsite").collection("VideosSection");
    const AboutPageCollections = client.db("seoWebsite").collection("AboutPage");
    const AboutPageTitleCollections = client.db("seoWebsite").collection("AboutPageTitle");


    const logoCollection = client.db("seoWebsite").collection("logo");
    const brandImagelogoCollection = client.db("seoWebsite").collection("brandImage");
   




    /* Header Area */

    // app.post("/add-logos", async (req, res) => {
    //   const logo = req.body;
    //   const result = await logoCollection.insertOne(logo);
    //   res.send(result);
    // });

    // app.get("/logos", async (req, res) => {
    //   const query = {};
    //   const cursor = logoCollection.find(query);
    //   const logo = await cursor.toArray();
    //   res.send(logo);
    // });
    // app.get("/logo/:id", async (req, res) => {
    //   const query = {};
    //   const cursor = logoCollection.find(query);
    //   const logo = await cursor.toArray();
    //   res.send(logo);
    // });

    // app.put("/logo/:id", async (req, res) => {
    //   const id = req.params.id;
    //   const updateLogo = req.body;
    //   const filter = { _id: new ObjectId(id) };
    //   const options = { upsert: true };
    //   const updatedDoc = {
    //     $set: {
    //       logo: updateLogo.logo,
    //     },
    //   };

    //   const result = await logoCollection.updateOne(
    //     filter,
    //     updatedDoc,
    //     options
    //   );
    //   res.send(result);
    // });





/* brandImagelogoCollection */

app.post("/add-brand-image", async (req, res) => {
  const brandImage = req.body;
  const result = await brandImagelogoCollection.insertOne(brandImage);
  res.send(result);
});

app.get("/brand-images", async (req, res) => {
  const query = {};
  const cursor = brandImagelogoCollection.find(query);
  const brandImage = await cursor.toArray();
  res.send(brandImage);
});
app.get("/brand-image/:id", async (req, res) => {
  const query = {};
  const cursor = brandImagelogoCollection.find(query);
  const brandImage = await cursor.toArray();
  res.send(brandImage);
});

app.put("/brand-image/:id", async (req, res) => {
  const id = req.params.id;
  const brandImage = req.body;
  const filter = { _id: new ObjectId(id) };
  const options = { upsert: true };
  const updatedDoc = {
    $set: {
      logo: brandImage.logo,
    },
  };

  const result = await brandImagelogoCollection.updateOne(
    filter,
    updatedDoc,
    options
  );
  res.send(result);
});

































































































    /* Seo site post */

    app.post("/add-website", async (req, res) => {
      const websiteCheck = req.body;
      const result = await websiteCollections.insertOne(websiteCheck);
      res.send(result);
    });

    app.get("/website", async (req, res) => {
      const query = {};
      const cursor = websiteCollections.find(query);
      const websiteCheck = await cursor.toArray();
      res.send(websiteCheck);
    });

    app.get("/website/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const website = await websiteCollections.findOne(query);
      res.send(website);
    });

    app.put("/edit-website/:id", async (req, res) => {
      const id = req.params.id;
      const edit = req.body;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updatedDoc = {
        $set: {
          email: edit.email,
          website: edit.website,
          metaDescription: edit.metaDescription,
          mobileFriendly: edit.mobileFriendly,
          pageLoadSpeed: edit.pageLoadSpeed,
          ssl: edit.ssl,
          sitemap: edit.sitemap,
          brokenLinks: edit.brokenLinks,
          ux: edit.ux,
          backlinks: edit.backlinks,
          img: edit.img,
          pdfLink: edit.pdfLink,
          auditStatus: edit.auditStatus,
          
        },
      };

      const result = await websiteCollections.updateOne(
        filter,
        updatedDoc,
        options
      );
      res.send(result);
    });

    /* Packages */
    app.post("/add-package", async (req, res) => {
      const package = req.body;
      const result = await packageCollections.insertOne(package);
      res.send(result);
    });

    app.get("/packages", async (req, res) => {
      const query = {};
      const cursor = packageCollections.find(query);
      const packages = await cursor.toArray();
      res.send(packages);
    });

    app.get("/package/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const package = await packageCollections.findOne(query);
      res.send(package);
    });

    app.put("/edit-package/:id", async (req, res) => {
      const id = req.params.id;
      const package = req.body;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updatedDoc = {
        $set: {
          packageName: package.packageName,
          price: package.price,
          img: package.img,
          featureOne: package.featureOne,
          featureTwo: package.featureTwo,
          featureThree: package.featureThree,
          featureFour: package.featureFour,
          featureFive: package.featureFive,
          featureSix: package.featureSix,
          featureSeven: package.featureSeven,
          featureEight: package.featureEight,
          featureNine: package.featureNine,
          featureTen: package.featureTen,
        },
      };

      const result = await packageCollections.updateOne(
        filter,
        updatedDoc,
        options
      );
      res.send(result);
    });



    app.post("/add-package-title", async (req, res) => {
      const packageTitle = req.body;
      const result = await packageTitleCollections.insertOne(packageTitle);
      res.send(result);
    });

    app.get("/package-titles/", async (req, res) => {
      const query = {};
      const cursor = packageTitleCollections.find(query);
      const packageTitle = await cursor.toArray();
      res.send(packageTitle);
    });
    app.get("/package-title/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const packageTitle = await packageTitleCollections.findOne(query);
      res.send(packageTitle);
    });


    app.put("/package-title/:id", async (req, res) => {
      const id = req.params.id;
      const packageTitle = req.body;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updatedDoc = {
        $set: {
          titleTop: packageTitle.titleTop,
          titleOne: packageTitle.titleOne,
          titleTwo: packageTitle.titleTwo,
          description: packageTitle.description,
        },
      };

      const result = await packageTitleCollections.updateOne(
        filter,
        updatedDoc,
        options
      );
      res.send(result);
    });

    /*  */

    /* Order */
    app.post("/new-order", async (req, res) => {
      const order = req.body;
      const result = await orderCollections.insertOne(order);
      res.send(result);
    });

    app.get("/orders", async (req, res) => {
      const query = {};
      const cursor = orderCollections.find(query);
      const orders = await cursor.toArray();
      res.send(orders);
    });

    app.get("/order/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const order = await orderCollections.findOne(query);
      res.send(order);
    });

    app.put("/order/:id", async (req, res) => {
      const id = req.params.id;
      const updateOrder = req.body;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updatedDoc = {
        $set: {
          paymentStatus: updateOrder.paymentStatus,
          orderStatus: updateOrder.orderStatus,
        },
      };

      const result = await orderCollections.updateOne(
        filter,
        updatedDoc,
        options
      );
      res.send(result);
    });


    app.put("/payment-cancelled/:id", async (req, res) => {
      const id = req.params.id;
      const updateOrder = req.body;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updatedDoc = {
        $set: {
          paymentStatus: updateOrder.paymentStatus,
        },
      };

      const result = await orderCollections.updateOne(
        filter,
        updatedDoc,
        options
      );
      res.send(result);
    });
    app.put("/payment-received/:id", async (req, res) => {
      const id = req.params.id;
      const updateOrder = req.body;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updatedDoc = {
        $set: {
          paymentStatus: updateOrder.paymentStatus,
        },
      };

      const result = await orderCollections.updateOne(
        filter,
        updatedDoc,
        options
      );
      res.send(result);
    });

    /*  */

    /* payment */

    app.post("/payment", async (req, res) => {
      const email = req.body;
      const result = await paypalEmailCollections.insertOne(email);
      res.send(result);
    });

    app.get("/payments", async (req, res) => {
      const query = {};
      const cursor = paypalEmailCollections.find(query);
      const email = await cursor.toArray();
      res.send(email);
    });
    app.get("/payment/:id", async (req, res) => {
      const query = {};
      const cursor = paypalEmailCollections.find(query);
      const email = await cursor.toArray();
      res.send(email);
    });

    app.put("/payment/:id", async (req, res) => {
      const id = req.params.id;
      const updateEmail = req.body;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updatedDoc = {
        $set: {
          email: updateEmail.email,
        },
      };

      const result = await paypalEmailCollections.updateOne(
        filter,
        updatedDoc,
        options
      );
      res.send(result);
    });
    /*  */

    /* User Manage */



    app.post("/add-user", async (req, res) => {
      const user = req.body;
      const result = await userCollection.insertOne(user);
      res.send(result);
    });

    app.get("/users", async (req, res) => {
      const query = {};
      const cursor = userCollection.find(query);
      const user = await cursor.toArray();
      res.send(user);
    });

    app.get("/user/:id", async (req, res) => {
      const query = {};
      const cursor = userCollection.find(query);
      const user = await cursor.toArray();
      res.send(user);
    });


    app.put("/user/:id", async (req, res) => {
      const id = req.params.id;
      const userUpdate = req.body;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updatedDoc = {
        $set: {
          userName: userUpdate.userName,
          userEmail: userUpdate.userEmail,
          userRole: userUpdate.userRole,
        },
      };

      const result = await userCollection.updateOne(
        filter,
        updatedDoc,
        options
      );
      res.send(result);
    });
    app.delete("/user/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
    
      try {
        const result = await userCollection.deleteOne(filter);
        if (result.deletedCount === 1) {
          res.status(200).json({ message: "User deleted successfully" });
        } else {
          res.status(404).json({ message: "User not found" });
        }
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
      }
    });
    

    /* payment */


        /* general Setting */

        app.post("/add-logo", async (req, res) => {
          const logo = req.body;
          const result = await GeneralCollections.insertOne(logo);
          res.send(result);
        });
    
        app.get("/logo", async (req, res) => {
          const query = {};
          const cursor = GeneralCollections.find(query);
          const logo = await cursor.toArray();
          res.send(logo);
        });
        app.get("/logo/:id", async (req, res) => {
          const query = {};
          const cursor = GeneralCollections.find(query);
          const logo = await cursor.toArray();
          res.send(logo);
        });
    
        app.put("/logo/:id", async (req, res) => {
          const id = req.params.id;
          const updateData = req.body;
          const filter = { _id: new ObjectId(id) };
          const options = { upsert: true };
          const updatedDoc = {
            $set: {
              logo: updateData.logo,
            
            },
          };
    
          const result = await GeneralCollections.updateOne(
            filter,
            updatedDoc,
            options
          );
          res.send(result);
        });
    
        /* payment */




        /* About Us Option Setting */

        app.post("/add-about", async (req, res) => {
          const about = req.body;
          const result = await AboutUsOptionCollections.insertOne(about);
          res.send(result);
        });
    
        app.get("/abouts", async (req, res) => {
          const query = {};
          const cursor = AboutUsOptionCollections.find(query);
          const about = await cursor.toArray();
          res.send(about);
        });

        app.get("/about/:id", async (req, res) => {
          const id = req.params.id; 
          const query = { _id: new ObjectId(id) }; 
          const about = await AboutUsOptionCollections.findOne(query); 
          res.send(about);
        });
       

         
    
        app.put("/edit-about/:id", async (req, res) => {
          const id = req.params.id;
          const updateAbout = req.body;
          const filter = { _id: new ObjectId(id) };
          const options = { upsert: true };
          const updatedDoc = {
            $set: {
              img: updateAbout.img,
              title: updateAbout.title,
              subText: updateAbout.subText,
            },
          };
    
          const result = await AboutUsOptionCollections.updateOne(
            filter,
            updatedDoc,
            options
          );
          res.send(result);
        });



             /* About page Option Setting */

             app.post("/add-about-page", async (req, res) => {
              const about = req.body;
              const result = await AboutPageCollections.insertOne(about);
              res.send(result);
            });
        
            app.get("/abouts-page", async (req, res) => {
              const query = {};
              const cursor = AboutPageCollections.find(query);
              const about = await cursor.toArray();
              res.send(about);
            });
    
            app.get("/about-page/:id", async (req, res) => {
              const id = req.params.id; 
              const query = { _id: new ObjectId(id) }; 
              const about = await AboutPageCollections.findOne(query); 
              res.send(about);
            });
           
    
             
        
            app.put("/edit-about-page/:id", async (req, res) => {
              const id = req.params.id;
              const updateAbout = req.body;
              const filter = { _id: new ObjectId(id) };
              const options = { upsert: true };
              const updatedDoc = {
                $set: {
                  img: updateAbout.img,
                  title: updateAbout.title,
                  subText: updateAbout.subText,
                },
              };
        
              const result = await AboutPageCollections.updateOne(
                filter,
                updatedDoc,
                options
              );
              res.send(result);
            });


                /* About page Title Option Title Setting */


            
                app.get("/about-page-titles", async (req, res) => {
                  const query = {};
                  const cursor = AboutPageTitleCollections.find(query);
                  const about = await cursor.toArray();
                  res.send(about);
                });
        
                app.get("/about-page-title/:id", async (req, res) => {
                  const id = req.params.id; 
                  const query = { _id: new ObjectId(id) }; 
                  const about = await AboutPageTitleCollections.findOne(query); 
                  res.send(about);
                });
               
        
                 
            
                app.put("/edit-about-page-title/:id", async (req, res) => {
                  const id = req.params.id;
                  const updateAbout = req.body;
                  const filter = { _id: new ObjectId(id) };
                  const options = { upsert: true };
                  const updatedDoc = {
                    $set: {
                    
                      title: updateAbout.title,
                      desc: updateAbout.desc,
                    },
                  };
            
                  const result = await AboutPageTitleCollections.updateOne(
                    filter,
                    updatedDoc,
                    options
                  );
                  res.send(result);
                });
    
        /* Banner area */


        app.post("/add-banner", async (req, res) => {
          const banner = req.body;
          const result = await BannerOptionCollections.insertOne(banner);
          res.send(result);
        });
    
        app.get("/banner", async (req, res) => {
          const query = {};
          const cursor = BannerOptionCollections.find(query);
          const banner = await cursor.toArray();
          res.send(banner);
        });
        app.get("/banner/:id", async (req, res) => {
          const query = {};
          const cursor = BannerOptionCollections.find(query);
          const banner = await cursor.toArray();
          res.send(banner);
        });
    
        app.put("/edit-banner/:id", async (req, res) => {
          const id = req.params.id;
          const updateBanner = req.body;
          const filter = { _id: new ObjectId(id) };
          const options = { upsert: true };
          const updatedDoc = {
            $set: {
              bannerHeading: updateBanner.bannerHeading,
              buttonText: updateBanner.buttonText,
              bunnerImage: updateBanner.bunnerImage,
              bannertext: updateBanner.bannertext,
          
            },
          };
    
          const result = await BannerOptionCollections.updateOne(
            filter,
            updatedDoc,
            options
          );
          res.send(result);
        });
    
        /* end */



        /* Our speciality area */


        app.post("/add-speciality", async (req, res) => {
          const speciality = req.body;
          const result = await SpecialityOptionCollections.insertOne(speciality);
          res.send(result);
        });
    
        app.get("/speciality", async (req, res) => {
          const query = {};
          const cursor = SpecialityOptionCollections.find(query);
          const speciality = await cursor.toArray();
          res.send(speciality);
        });
        app.get("/speciality/:id", async (req, res) => {
          const query = {};
          const cursor = SpecialityOptionCollections.find(query);
          const speciality = await cursor.toArray();
          res.send(speciality);
        });
    
        app.put("/edit-speciality/:id", async (req, res) => {
          const id = req.params.id;
          const updateSpeciality = req.body;
          const filter = { _id: new ObjectId(id) };
          const options = { upsert: true };
          const updatedDoc = {
            $set: {
              headingTitleOne: updateSpeciality.headingTitleOne,
              headingTitleTwo: updateSpeciality.headingTitleTwo,
              subText: updateSpeciality.subText,
              cardTitleOne: updateSpeciality.cardTitleOne,
              cardDescriptionOne: updateSpeciality.cardDescriptionOne,
              cardTitleTwo: updateSpeciality.cardTitleTwo,
              cardDescriptionTwo: updateSpeciality.cardDescriptionTwo,
              cardTitleThree: updateSpeciality.cardTitleThree,
              cardDescriptionThree: updateSpeciality.cardDescriptionThree,
              cardTitleFour: updateSpeciality.cardTitleFour,
              cardDescriptionFour: updateSpeciality.cardDescriptionFour,
            },
          };
    
          const result = await SpecialityOptionCollections.updateOne(
            filter,
            updatedDoc,
            options
          );
          res.send(result);
        });
    
        /* end */
        

                /* Why  choose area */


                app.post("/add-why", async (req, res) => {
                  const choose = req.body;
                  const result = await WhyChooseOptionCollections.insertOne(choose);
                  res.send(result);
                });
            
                app.get("/why-choose", async (req, res) => {
                  const query = {};
                  const cursor = WhyChooseOptionCollections.find(query);
                  const choose = await cursor.toArray();
                  res.send(choose);
                });
                app.get("/why-choose/:id", async (req, res) => {
                  const query = {};
                  const cursor = WhyChooseOptionCollections.find(query);
                  const choose = await cursor.toArray();
                  res.send(choose);
                });
            
                app.put("/edit-why-choose/:id", async (req, res) => {
                  const id = req.params.id;
                  const updateChoose = req.body;
                  const filter = { _id: new ObjectId(id) };
                  const options = { upsert: true };
                  const updatedDoc = {
                    $set: {
                      img: updateChoose.img,
                      whyToptext: updateChoose.whyToptext,
                      bannerHeadingText1: updateChoose.bannerHeadingText1,
                      bannerHeadingText2: updateChoose.bannerHeadingText2,
                      cardTitleOne: updateChoose.cardTitleOne,
                      cardDescOne: updateChoose.cardDescOne,
                      cardTitleTwo: updateChoose.cardTitleTwo,
                      cardDescTwo: updateChoose.cardDescTwo,
                      cardTitleThree: updateChoose.cardTitleThree,
                      cardDescThree: updateChoose.cardDescThree,
                      cardTitleFour: updateChoose.cardTitleFour,
                      cardDescFour: updateChoose.cardDescFour,
                     
                    },
                  };
            
                  const result = await WhyChooseOptionCollections.updateOne(
                    filter,
                    updatedDoc,
                    options
                  );
                  res.send(result);
                });
            
                /* end */

/* Road Map area */


app.post("/add-road", async (req, res) => {
  const road = req.body;
  const result = await RoadMapOptionCollections.insertOne(road);
  res.send(result);
});

app.get("/road", async (req, res) => {
  const query = {};
  const cursor = RoadMapOptionCollections.find(query);
  const road = await cursor.toArray();
  res.send(road);
});
app.get("/road/:id", async (req, res) => {
  const query = {};
  const cursor = RoadMapOptionCollections.find(query);
  const road = await cursor.toArray();
  res.send(road);
});

app.put("/edit-road/:id", async (req, res) => {
  const id = req.params.id;
  const updateRoad = req.body;
  const filter = { _id: new ObjectId(id) };
  const options = { upsert: true };
  const updatedDoc = {
    $set: {
      titleToptext: updateRoad.titleToptext,
      bannerHeadingText1: updateRoad.bannerHeadingText1,
      bannerHeadingText2: updateRoad.bannerHeadingText2,
      cardDateOne: updateRoad.cardDateOne,
      cardTitleOne: updateRoad.cardTitleOne,
      cardDescOne: updateRoad.cardDescOne,
      cardDateTwo: updateRoad.cardDateTwo,
      cardTitleTwo: updateRoad.cardTitleTwo,
      cardDescTwo: updateRoad.cardDescTwo,
      cardDateThree: updateRoad.cardDateThree,
      cardTitleThree: updateRoad.cardTitleThree,
      cardDescThree: updateRoad.cardDescThree,
      cardDateFour: updateRoad.cardDateFour,
      cardTitleFour: updateRoad.cardTitleFour,
      cardDescFour: updateRoad.cardDescFour,
      cardDateFive: updateRoad.cardDateFive,
      cardTitleFive: updateRoad.cardTitleFive,
      cardDescFive: updateRoad.cardDescFive,
      
     
    },
  };

  const result = await RoadMapOptionCollections.updateOne(
    filter,
    updatedDoc,
    options
  );
  res.send(result);
});

/* end */





    /* Team Members */

    app.post("/add-team", async (req, res) => {
      const team = req.body;
      const result = await TeamOptionCollections.insertOne(team);
      res.send(result);
    });

    app.get("/teams", async (req, res) => {
      const query = {};
      const cursor = TeamOptionCollections.find(query);
      const team = await cursor.toArray();
      res.send(team);
    });
    app.get("/team/:id", async (req, res) => {
      const id = req.params.id; // Get the ID from the URL
      const query = { _id: new ObjectId(id) }; // Filter by ID
      const team = await TeamOptionCollections.findOne(query); // Use findOne to get a single testimonial
      res.send(team);
    });
    

    app.put("/team/:id", async (req, res) => {
      const id = req.params.id;
      const team = req.body;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updatedDoc = {
        $set: {
          personName: team.personName,
          personImg: team.personImg,
          personTitle: team.personTitle,
          facebook: team.facebook,
          twitter: team.twitter,
        },
      };

      const result = await TeamOptionCollections.updateOne(
        filter,
        updatedDoc,
        options
      );
      res.send(result);
    });

    /* team */

/* Team area Title */


app.post("/add-team-title", async (req, res) => {
  const teamTitle = req.body;
  const result = await TeamTitleOptionCollections.insertOne(teamTitle);
  res.send(result);
});

app.get("/team-title", async (req, res) => {
  const query = {};
  const cursor = TeamTitleOptionCollections.find(query);
  const teamTitle = await cursor.toArray();
  res.send(teamTitle);
});
app.get("/team-title/:id", async (req, res) => {
  const query = {};
  const cursor = TeamTitleOptionCollections.find(query);
  const teamTitle = await cursor.toArray();
  res.send(teamTitle);
});

app.put("/edit-team-title/:id", async (req, res) => {
  const id = req.params.id;
  const updateTeamTitle = req.body;
  const filter = { _id: new ObjectId(id) };
  const options = { upsert: true };
  const updatedDoc = {
    $set: {
      titleTopText: updateTeamTitle.titleTopText,
      TitleOne: updateTeamTitle.TitleOne,
      titleTwo: updateTeamTitle.titleTwo,
      
      
     
    },
  };

  const result = await TeamTitleOptionCollections.updateOne(
    filter,
    updatedDoc,
    options
  );
  res.send(result);
});

/* end */


    /* testimonial */

    app.post("/testimonial", async (req, res) => {
      const testimonial = req.body;
      const result = await TestimonialOptionCollections.insertOne(testimonial);
      res.send(result);
    });

    app.get("/testimonials", async (req, res) => {
      const query = {};
      const cursor = TestimonialOptionCollections.find(query);
      const testimonial = await cursor.toArray();
      res.send(testimonial);
    });
    

    app.get("/testimonial/:id", async (req, res) => {
      const id = req.params.id; // Get the ID from the URL
      const query = { _id: new ObjectId(id) }; // Filter by ID
      const testimonial = await TestimonialOptionCollections.findOne(query); // Use findOne to get a single testimonial
      res.send(testimonial);
    });
    app.delete("/testimonial/:id", async (req, res) => {
      const id = req.params.id; // Get the ID from the URL
      const query = { _id: new ObjectId(id) }; // Filter by ID
      const result = await TestimonialOptionCollections.deleteOne(query); // Delete the document
      if (result.deletedCount === 1) {
        res.send("Testimonial deleted successfully");
      } else {
        res.status(404).send("Testimonial not found");
      }
    });
    
    

    app.put("/testimonial/:id", async (req, res) => {
      const id = req.params.id;
      const testimonial = req.body;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updatedDoc = {
        $set: {
          personName: testimonial.personName,
          personTitle: testimonial.personTitle,
          personImg: testimonial.personImg,
          desc: testimonial.desc,
        },
      };

      const result = await TestimonialOptionCollections.updateOne(
        filter,
        updatedDoc,
        options
      );
      res.send(result);
    });

    /* testimonial */



    /* testimonial title */

    app.post("/testimonial-title", async (req, res) => {
      const testimonialTitle = req.body;
      const result = await TestimonialTitleOptionCollections.insertOne(testimonialTitle);
      res.send(result);
    });

    app.get("/testimonials-title", async (req, res) => {
      const query = {};
      const cursor = TestimonialTitleOptionCollections.find(query);
      const testimonialTitle = await cursor.toArray();
      res.send(testimonialTitle);
    });
    

    app.get("/testimonial-title/:id", async (req, res) => {
      const id = req.params.id; 
      const query = { _id: new ObjectId(id) }; 
      const testimonialTitle = await TestimonialTitleOptionCollections.findOne(query); 
      res.send(testimonialTitle);
    });
   
    
    

    app.put("/testimonial-title/:id", async (req, res) => {
      const id = req.params.id;
      const testimonialTitle = req.body;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updatedDoc = {
        $set: {
          title: testimonialTitle.title,
          desc: testimonialTitle.desc,
          reviewNumber: testimonialTitle.reviewNumber,
         
        },
      };

      const result = await TestimonialTitleOptionCollections.updateOne(
        filter,
        updatedDoc,
        options
      );
      res.send(result);
    });

    /* testimonial */






    /* faqs */

    app.post("/faq", async (req, res) => {
      const faq = req.body;
      const result = await FaqsOptionCollections.insertOne(faq);
      res.send(result);
    });


    app.get("/faqs", async (req, res) => {
      const query = {};
      const cursor = FaqsOptionCollections.find(query);
      const faqs = await cursor.toArray();
      res.send(faqs);
    });
    

    app.get("/faq/:id", async (req, res) => {
      const id = req.params.id; // Get the ID from the URL
      const query = { _id: new ObjectId(id) }; // Filter by ID
      const faq = await FaqsOptionCollections.findOne(query); // Use findOne to get a single testimonial
      res.send(faq);
    });
    app.delete("/faq/:id", async (req, res) => {
      const id = req.params.id; // Get the ID from the URL
      const query = { _id: new ObjectId(id) }; // Filter by ID
      const faq = await FaqsOptionCollections.deleteOne(query); // Delete the document
      if (faq.deletedCount === 1) {
        res.send("Testimonial deleted successfully");
      } else {
        res.status(404).send("Testimonial not found");
      }
    });
    
    

    app.put("/faq/:id", async (req, res) => {
      const id = req.params.id;
      const faq = req.body;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updatedDoc = {
        $set: {
          answer: faq.answer,
          question: faq.question,
          
        },
      };

      const result = await FaqsOptionCollections.updateOne(
        filter,
        updatedDoc,
        options
      );
      res.send(result);
    });

/* faqs */
    app.post("/faq-title", async (req, res) => {
      const faq = req.body;
      const result = await FaqsTitleCollections.insertOne(faq);
      res.send(result);
    });

    app.get("/faqs-title", async (req, res) => {
      const query = {};
      const cursor = FaqsTitleCollections.find(query);
      const faqs = await cursor.toArray();
      res.send(faqs);
    });
    app.get("/faq-title/:id", async (req, res) => {
      const id = req.params.id; // Get the ID from the URL
      const query = { _id: new ObjectId(id) }; // Filter by ID
      const faq = await FaqsTitleCollections.findOne(query); // Use findOne to get a single testimonial
      res.send(faq);
    });

    app.put("/faq-title/:id", async (req, res) => {
      const id = req.params.id;
      const faq = req.body;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updatedDoc = {
        $set: {
          titleTopText: faq.titleTopText,
          desc: faq.desc,       
        },
      };

      const result = await FaqsTitleCollections.updateOne(
        filter,
        updatedDoc,
        options
      );
      res.send(result);
    });
    


    /* cta */
    app.post("/add-cta", async (req, res) => {
      const cta = req.body;
      const result = await CtaCollections.insertOne(cta);
      res.send(result);
    });

    app.get("/cta-lists", async (req, res) => {
      const query = {};
      const cursor = CtaCollections.find(query);
      const cta = await cursor.toArray();
      res.send(cta);
    });
    app.get("/cta-list/:id", async (req, res) => {
      const id = req.params.id; 
      const query = { _id: new ObjectId(id) }; 
      const cta = await CtaCollections.findOne(query); 
      res.send(cta);
    });

    app.put("/cta-list/:id", async (req, res) => {
      const id = req.params.id;
      const cta = req.body;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updatedDoc = {
        $set: {
          ctaHeading: cta.ctaHeading,
          buttonText: cta.buttonText,   
          bannertext: cta.bannertext,   
          buttonLink: cta.buttonLink,   
        },
      };

      const result = await CtaCollections.updateOne(
        filter,
        updatedDoc,
        options
      );
      res.send(result);
    });
/* videosSection */


app.get("/video-sections", async (req, res) => {
  const query = {};
  const cursor = VideosSectionCollections.find(query);
  const cta = await cursor.toArray();
  res.send(cta);
});
app.get("/video-section/:id", async (req, res) => {
  const id = req.params.id; 
  const query = { _id: new ObjectId(id) }; 
  const cta = await VideosSectionCollections.findOne(query); 
  res.send(cta);
});

app.put("/video-section/:id", async (req, res) => {
  const id = req.params.id;
  const cta = req.body;
  const filter = { _id: new ObjectId(id) };
  const options = { upsert: true };
  const updatedDoc = {
    $set: {
      videoHeading: cta.videoHeading,
      description: cta.description,   
      youtubeLink: cta.youtubeLink,   
      ctaImage: cta.ctaImage,   
    },
  };

  const result = await VideosSectionCollections.updateOne(
    filter,
    updatedDoc,
    options
  );
  res.send(result);
});



/* footer area */


    
    app.post("/footer-social", async (req, res) => {
      const footerSocial = req.body;
      const result = await FooterCollections.insertOne(footerSocial);
      res.send(result);
    });

    app.get("/footer-social", async (req, res) => {
      const query = {};
      const cursor = FooterCollections.find(query);
      const footerSocial = await cursor.toArray();
      res.send(footerSocial);
    });
    

    app.get("/footer-social/:id", async (req, res) => {
      const id = req.params.id; // Get the ID from the URL
      const query = { _id: new ObjectId(id) }; // Filter by ID
      const footerSocial = await FooterCollections.findOne(query); // Use findOne to get a single testimonial
      res.send(footerSocial);
    });
    
    
    

    app.put("/footer-social/:id", async (req, res) => {
      const id = req.params.id;
      const footerSocial = req.body;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updatedDoc = {
        $set: {
          facebook: footerSocial.facebook,
          twitter: footerSocial.twitter,
          instragram: footerSocial.instragram,
          youtube: footerSocial.youtube,
          linkedin: footerSocial.linkedin,
          
        },
      };

      const result = await FooterCollections.updateOne(
        filter,
        updatedDoc,
        options
      );
      res.send(result);
    });

    
/* footer area end */
/* footer Links */


    
app.post("/add-footer-about", async (req, res) => {
  const footerLink = req.body;
  const result = await FooterLinkCollections.insertOne(footerLink);
  res.send(result);
});

app.get("/footer-about", async (req, res) => {
  const query = {};
  const cursor = FooterLinkCollections.find(query);
  const footerLink = await cursor.toArray();
  res.send(footerLink);
});


app.get("/footer-about/:id", async (req, res) => {
  const id = req.params.id; // Get the ID from the URL
  const query = { _id: new ObjectId(id) }; // Filter by ID
  const footerLink = await FooterLinkCollections.findOne(query); // Use findOne to get a single testimonial
  res.send(footerLink);
});




app.put("/footer-about/:id", async (req, res) => {
  const id = req.params.id;
  const footerLink = req.body;
  const filter = { _id: new ObjectId(id) };
  const options = { upsert: true };
  const updatedDoc = {
    $set: {
      
      FooterAbout: footerLink.FooterAbout,
      CopyRight: footerLink.CopyRight,
    
      
    },
  };

  const result = await FooterLinkCollections.updateOne(
    filter,
    updatedDoc,
    options
  );
  res.send(result);
});


/* footer area end */


    /* SliderCollections */

    app.post("/slider", async (req, res) => {
      const slider = req.body;
      const result = await sliderCollections.insertOne(slider);
      res.send(result);
    });

    app.get("/sliders", async (req, res) => {
      const query = {};
      const cursor = sliderCollections.find(query);
      const slider = await cursor.toArray();
      res.send(slider);
    });
    

    app.get("/slider/:id", async (req, res) => {
      const id = req.params.id; // Get the ID from the URL
      const query = { _id: new ObjectId(id) }; // Filter by ID
      const slider = await sliderCollections.findOne(query); // Use findOne to get a single testimonial
      res.send(slider);
    });
   
    
    

    app.put("/slider/:id", async (req, res) => {
      const id = req.params.id;
      const sliderUpdate = req.body;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updatedDoc = {
        $set: {
        
          sliderDesc: sliderUpdate.sliderDesc,
          sliderImg: sliderUpdate.sliderImg,





          

          
         
        },
      };

      const result = await sliderCollections.updateOne(
        filter,
        updatedDoc,
        options
      );
      res.send(result);
    });

    /* testimonial */


/* Contact Page */



    app.post("/add-contact", async (req, res) => {
      const contact = req.body;
      const result = await ContactPageCollections.insertOne(contact);
      res.send(result);
    });

    app.get("/contact", async (req, res) => {
      const query = {};
      const cursor = ContactPageCollections.find(query);
      const contact = await cursor.toArray();
      res.send(contact);
    });
    

    app.get("/contact/:id", async (req, res) => {
      const id = req.params.id; 
      const query = { _id: new ObjectId(id) }; 
      const contact = await ContactPageCollections.findOne(query); 
      res.send(contact);
    });
    app.delete("/contact/:id", async (req, res) => {
      const id = req.params.id; 
      const query = { _id: new ObjectId(id) }; 
      const result = await ContactPageCollections.deleteOne(query); 
      if (result.deletedCount === 1) {
        res.send("Testimonial deleted successfully");
      } else {
        res.status(404).send("Testimonial not found");
      }
    });
    
    

    app.put("/contact/:id", async (req, res) => {
      const id = req.params.id;
      const contact = req.body;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updatedDoc = {
        $set: {
          titleTopText: contact.titleTopText,
          titleOne: contact.titleOne,
          titleTwo: contact.titleTwo,
          address: contact.address,
          phone: contact.phone,
          email: contact.email,
          img: contact.img,       
        },
      };

      const result = await ContactPageCollections.updateOne(
        filter,
        updatedDoc,
        options
      );
      res.send(result);
    });

    /* contact */




    /* contact us message */

    app.post("/add-contact-message", async (req, res) => {
      const contact = req.body;
      const result = await ContactMessageCollections.insertOne(contact);
      res.send(result);
    });

    app.get("/contact-messages", async (req, res) => {
      const query = {};
      const cursor = ContactMessageCollections.find(query);
      const contact = await cursor.toArray();
      res.send(contact);
    });
    app.get("/contact-message/:id", async (req, res) => {
      const id = req.params.id; 
      const query = { _id: new ObjectId(id) }; 
      const contact = await ContactMessageCollections.findOne(query); 
      res.send(contact);
    });

    app.put("/contact-message/:id", async (req, res) => {
      const id = req.params.id;
      const contact = req.body;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updatedDoc = {
        $set: {
          messageStatus: contact.messageStatus,
                 
        },
      };
    
      const result = await ContactMessageCollections.updateOne(
        filter,
        updatedDoc,
        options
      );
      res.send(result);
    });




    /* Ticket area */




app.post("/add-ticket", async (req, res) => {
  const ticket = req.body;
  const result = await TicketCollections.insertOne(ticket);
  res.send(result);
});

app.get("/tickets", async (req, res) => {
  const query = {};
  const cursor = TicketCollections.find(query);
  const ticket = await cursor.toArray();
  res.send(ticket);
});


app.get("/ticket/:id", async (req, res) => {
  const id = req.params.id; 
  const query = { _id: new ObjectId(id) }; 
  const ticket = await TicketCollections.findOne(query); 
  res.send(ticket);
});





app.put("/ticket/:id", async (req, res) => {
  const id = req.params.id; 
  const ticket = req.body;
  const filter = { _id: new ObjectId(id) };
  const options = { upsert: true };
  const updatedDoc = {
    $set: {
      ticketStatus: ticket.ticketStatus,
             
    },
  };

  const result = await TicketCollections.updateOne(
    filter,
    updatedDoc,
    options
  );
  res.send(result);
});

/* ticket */



/* Ticket Reply Collections */

app.post("/add-ticket-reply/", async (req, res) => {
  const ticketReply = req.body;
  const result = await TicketReplyCollections.insertOne(ticketReply);
  res.send(result);
});

app.get("/reply-tickets/", async (req, res) => {
  const query = {};
  const cursor = TicketReplyCollections.find(query);
  const ticketReply = await cursor.toArray();
  res.send(ticketReply);
});










/* newsLetter */


app.post("/add-newsLetter", async (req, res) => {
  const feature = req.body;
  const result = await newsLetterCollections.insertOne(feature);
  res.send(result);
});


app.get("/subscription-email/", async (req, res) => {
  const query = {};
  const cursor = newsLetterCollections.find(query);
  const newsLetter = await cursor.toArray();
  res.send(newsLetter);
});



/* feature Page */



app.post("/add-feature", async (req, res) => {
  const feature = req.body;
  const result = await featurePageCollections.insertOne(feature);
  res.send(result);
});

app.get("/features", async (req, res) => {
  const query = {};
  const cursor = featurePageCollections.find(query);
  const feature = await cursor.toArray();
  res.send(feature);
});


app.get("/feature/:id", async (req, res) => {
  const id = req.params.id; 
  const query = { _id: new ObjectId(id) }; 
  const feature = await featurePageCollections.findOne(query); 
  res.send(feature);
});




app.put("/feature/:id", async (req, res) => {
  const id = req.params.id;
  const feature = req.body;
  const filter = { _id: new ObjectId(id) };
  const options = { upsert: true };
  const updatedDoc = {
    $set: {
      featureImg: feature.featureImg,
      featureTitle: feature.featureTitle,
      featureDescOne: feature.featureDescOne,
      featureDescTwo: feature.featureDescTwo,
      featureDescThree: feature.featureDescThree,
      counterTitleOne: feature.counterTitleOne,
      couterDescOne: feature.couterDescOne,
      counterNumberOne: feature.counterNumberOne,
      counterTitleTwo: feature.counterTitleTwo,
      couterDescTwo: feature.couterDescTwo,
      counterNumberTwo: feature.counterNumberTwo,

        
    },
  };

  const result = await featurePageCollections.updateOne(
    filter,
    updatedDoc,
    options
  );
  res.send(result);
});



/* OurSolutions list */

app.post("/add-solution", async (req, res) => {
  const solution = req.body;
  const result = await OurSolutionsCollections.insertOne(solution);
  res.send(result);
});

app.get("/solutions", async (req, res) => {
  const query = {};
  const cursor = OurSolutionsCollections.find(query);
  const solution = await cursor.toArray();
  res.send(solution);
});


app.get("/solution/:id", async (req, res) => {
  const id = req.params.id; 
  const query = { _id: new ObjectId(id) }; 
  const solution = await OurSolutionsCollections.findOne(query); 
  res.send(solution);
});

app.put("/solution/:id", async (req, res) => {
  const id = req.params.id;
  const solution = req.body;
  const filter = { _id: new ObjectId(id) };
  const options = { upsert: true };
  const updatedDoc = {
    $set: {
      featureTitle: solution.featureTitle,
      featureDesc: solution.featureDesc,
      featureImg: solution.featureImg,
    

        
    },
  };

  const result = await OurSolutionsCollections.updateOne(
    filter,
    updatedDoc,
    options
  );
  res.send(result); 
});


/* Solution title */

app.get("/solutions-title", async (req, res) => {
  const query = {};
  const cursor = OurSolutionsTitleCollections.find(query);
  const solution = await cursor.toArray();
  res.send(solution);
});


app.get("/solution-title/:id", async (req, res) => {
  const id = req.params.id; 
  const query = { _id: new ObjectId(id) }; 
  const solution = await OurSolutionsTitleCollections.findOne(query); 
  res.send(solution);
});

app.put("/solution-title/:id", async (req, res) => {
  const id = req.params.id;
  const solution = req.body;
  const filter = { _id: new ObjectId(id) };
  const options = { upsert: true };
  const updatedDoc = {
    $set: {
      desc: solution.desc,
      title: solution.title,
    },
  };

  const result = await OurSolutionsTitleCollections.updateOne(
    filter,
    updatedDoc,
    options
  );
  res.send(result); 
});

/* Counter */
app.post("/add-counter", async (req, res) => {
  const counter = req.body;
  const result = await CouterOptionTitleCollections.insertOne(counter);
  res.send(result);
});

app.get("/counter-list", async (req, res) => {
  const query = {};
  const cursor = CouterOptionTitleCollections.find(query);
  const counter = await cursor.toArray();
  res.send(counter);
});


app.get("/counter/:id", async (req, res) => {
  const id = req.params.id; 
  const query = { _id: new ObjectId(id) }; 
  const counter = await CouterOptionTitleCollections.findOne(query); 
  res.send(counter);
});




app.put("/counter/:id", async (req, res) => {
  const id = req.params.id;
  const counter = req.body;
  const filter = { _id: new ObjectId(id) };
  const options = { upsert: true };
  const updatedDoc = {
    $set: {
      counterTitle: counter.counterTitle,
      counterNumber: counter.counterNumber,
      
     
    },
  };
  const result = await CouterOptionTitleCollections.updateOne(
    filter,
    updatedDoc,
    options
  );
  res.send(result);
});

/* About Company */
app.post("/add-about-company", async (req, res) => {
  const about = req.body;
  const result = await AboutCompanyTitleCollections.insertOne(about);
  res.send(result);
});

app.get("/about-company-list", async (req, res) => {
  const query = {};
  const cursor = AboutCompanyTitleCollections.find(query);
  const about = await cursor.toArray();
  res.send(about);
});


app.get("/about-company-list/:id", async (req, res) => {
  const id = req.params.id; 
  const query = { _id: new ObjectId(id) }; 
  const about = await AboutCompanyTitleCollections.findOne(query); 
  res.send(about);
});




app.put("/about-company-list/:id", async (req, res) => {
  const id = req.params.id;
  const about = req.body;
  const filter = { _id: new ObjectId(id) };
  const options = { upsert: true };
  const updatedDoc = {
    $set: {
      counterTitle: about.counterTitle,
      counterNumber: about.counterNumber,
    },
  };
  const result = await AboutCompanyTitleCollections.updateOne(
    filter,
    updatedDoc,
    options
  );
  res.send(result);
});

/* About Company title*/


app.get("/company-about-title", async (req, res) => {
  const query = {};
  const cursor = AboutCompanyCollections.find(query);
  const about = await cursor.toArray();
  res.send(about);
});


app.get("/company-about-title/:id", async (req, res) => {
  const id = req.params.id; 
  const query = { _id: new ObjectId(id) }; 
  const about = await AboutCompanyCollections.findOne(query); 
  res.send(about);
});




app.put("/company-about-title/:id", async (req, res) => {
  const id = req.params.id;
  const about = req.body;
  const filter = { _id: new ObjectId(id) };
  const options = { upsert: true };
  const updatedDoc = {
    $set: {
      name: about.name,
      companyName: about.companyName,
      Desc: about.Desc,     
    },
  };
  const result = await AboutCompanyCollections.updateOne(
    filter,
    updatedDoc,
    options
  );
  res.send(result);
});

/* Our services list */

app.post("/add-service", async (req, res) => {
  const service = req.body;
  const result = await OurservicesCollections.insertOne(service);
  res.send(result);
});

app.get("/services", async (req, res) => {
  const query = {};
  const cursor = OurservicesCollections.find(query);
  const service = await cursor.toArray();
  res.send(service);
});


app.get("/service/:id", async (req, res) => {
  const id = req.params.id; 
  const query = { _id: new ObjectId(id) }; 
  const service = await OurservicesCollections.findOne(query); 
  res.send(service);
});

app.put("/service/:id", async (req, res) => {
  const id = req.params.id;
  const service = req.body;
  const filter = { _id: new ObjectId(id) };
  const options = { upsert: true };
  const updatedDoc = {
    $set: {
      featureImg: service.featureImg,
      serviceTitle: service.serviceTitle,
      serviceDesc: service.serviceDesc,
     
    },
  };

  const result = await OurservicesCollections.updateOne(
    filter,
    updatedDoc,
    options
  );
  res.send(result); 
});

/* services title */
app.post("/add-service-title", async (req, res) => {
  const service = req.body;
  const result = await OurservicesTitleCollections.insertOne(service);
  res.send(result);
});


app.get("/services-title", async (req, res) => {
  const query = {};
  const cursor = OurservicesTitleCollections.find(query);
  const service = await cursor.toArray();
  res.send(service);
});
app.get("/services-title/:id", async (req, res) => {
  const id = req.params.id; 
  const query = { _id: new ObjectId(id) }; 
  const service = await OurservicesTitleCollections.findOne(query); 
  res.send(service);
});

app.put("/services-title/:id", async (req, res) => {
  const id = req.params.id;
  const service = req.body;
  const filter = { _id: new ObjectId(id) };
  const options = { upsert: true };
  const updatedDoc = {
    $set: {
      title: service.title,
      desc: service.desc,
    },
  };

  const result = await OurservicesTitleCollections.updateOne(
    filter,
    updatedDoc,
    options
  );
  res.send(result); 
});


/* Feature Two */

app.post("/add-feature-two", async (req, res) => {
  const feature = req.body;
  const result = await FeatureTwoCollections.insertOne(feature);
  res.send(result);
});

app.get("/features-two", async (req, res) => {
  const query = {};
  const cursor = FeatureTwoCollections.find(query);
  const feature = await cursor.toArray();
  res.send(feature);
});


app.get("/feature-two/:id", async (req, res) => {
  const id = req.params.id; 
  const query = { _id: new ObjectId(id) }; 
  const feature = await FeatureTwoCollections.findOne(query); 
  res.send(feature);
});




app.put("/feature-two/:id", async (req, res) => {
  const id = req.params.id;
  const feature = req.body;
  const filter = { _id: new ObjectId(id) };
  const options = { upsert: true };
  const updatedDoc = {
    $set: {
      featureImg: feature.featureImg,
      featureTitle: feature.featureTitle,
      featureDescOne: feature.featureDescOne,
      featureDescTwo: feature.featureDescTwo,
      featureDescThree: feature.featureDescThree,
      Desc: feature.Desc,
      
        
    },
  };

  const result = await FeatureTwoCollections .updateOne(
    filter,
    updatedDoc,
    options
  );
  res.send(result);
});



/* contact */





  } finally {
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("eCommerce Website is Live Now");
});
app.listen(port, () => {
  console.log(`eCommerce Website is Live Now ${port}`);
});
