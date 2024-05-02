import React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import useMediaQuery from "@mui/material/useMediaQuery";
import Profile1Image from "./murphy.webp";
import Profile2Image from "./wp1976337.jpg";
import Profile3Image from "./maisie-williams.jpg";
import image1 from "./Google-Play-Store-app.webp";
import image2 from "./app store black.png";

const Fifthpage = () => {
  const isMobileView = useMediaQuery("(max-width:600px)");

  return (
    <div style={{ textAlign: "center", marginTop: 50 }}>
      <div style={{ textAlign: "center", marginTop: 50 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Card
            variant="outlined"
            style={{
              width: "100%",
              maxWidth: 600,
            }}
          >
            <CardContent>
              <Typography
                variant="h3"
                style={{ fontSize: "50px", marginBottom: "20px" }}
              >
                Why customers love working with us.
              </Typography>
              <Typography variant="body1">
                "It's amazing what has helped me learn about my team. <br /> I
                don't worry about blind spots anymore, and 1-on-1s have never{" "}
                <br /> been more productive. The team loves it."
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>

      <div style={{ textAlign: "center", marginTop: 50 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "70%",
            margin: "0 auto",
            marginTop: 30,
            display: isMobileView ? "none" : "flex",
          }}
        >
          <Card variant="outlined" style={{ flexBasis: "30%" }}>
            <CardContent
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: 5,
                marginBottom: 5,
              }}
            >
              <img
                src={Profile1Image}
                alt="User Avatar"
                style={{
                  width: 50,
                  height: 50,
                  marginRight: 10,
                  borderRadius: 50,
                }}
              />
              <div>
                <Typography variant="body2">Jorge Robertson</Typography>
                <Typography variant="body2">CS at Google</Typography>
              </div>
            </CardContent>
          </Card>

          <Card variant="outlined" style={{ flexBasis: "30%" }}>
            <CardContent
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: 5,
                marginBottom: 5,
              }}
            >
              <img
                src={Profile2Image}
                alt="User Avatar"
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 50,
                }}
              />
              <div>
                <Typography variant="body2">Francisco Bell</Typography>
                <Typography variant="body2">Designer at Microsoft</Typography>
              </div>
            </CardContent>
          </Card>

          <Card variant="outlined" style={{ flexBasis: "30%" }}>
            <CardContent
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: 3,
                marginBottom: 3,
              }}
            >
              <img
                src={Profile3Image}
                alt="User Avatar"
                style={{
                  width: 50,
                  height: 50,
                  marginRight: 10,
                  borderRadius: 50,
                }}
              />
              <div>
                <Typography variant="body2">Beth Fox</Typography>
                <Typography variant="body2">Developer at Airbnb</Typography>
              </div>
            </CardContent>
          </Card>
        </div>

        <div style={{ marginTop: 20 }}>
          {isMobileView && (
            <Card style={{ width: "70%", margin: "0 auto", boxShadow: "none" }}>
              <CardContent
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  textAlign: "center",
                }}
              >
                <img
                  src={Profile1Image}
                  alt="User Avatar"
                  style={{
                    width: 50,
                    height: 50,
                    marginBottom: 10,
                    borderRadius: 50,
                  }}
                />
                <div>
                  <Typography variant="body2">Jorge Robertson</Typography>
                  <Typography variant="body2">CS at Google</Typography>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      <div
        style={{
          backgroundColor: "#710fe1",
          height: "auto",
          width: "80%",
          margin: "0 auto",
          display: "flex",
          flexDirection: isMobileView ? "column" : "row",
          justifyContent: isMobileView ? "center" : "space-between",
          alignItems: "center",
          padding: "20px",
          marginTop: 30,
          borderRadius: 15,
        }}
      >
        <Typography
          variant="h4"
          style={{ color: "white", marginBottom: isMobileView ? "20px" : 0 }}
        >
          84% of employees who use <br />
          trust their direct manager
        </Typography>
        <div
          style={{
            display: "flex",
            flexDirection: isMobileView ? "column" : "row",
            alignItems: "center",
          }}
        >
          <a
            href="https://play.google.com/store"
            style={{
              marginRight: isMobileView ? 0 : 10,
              marginBottom: isMobileView ? 10 : 0,
            }}
          >
            <img
              src={image1}
              alt="Image 1"
              style={{
                width: 120,
                height: 60,
                borderRadius: 10,
              }}
            />
          </a>

          <a href="https://play.google.com/store">
            <img
              src={image2}
              alt="Image 2"
              style={{
                width: 120,
                height: 90,
                borderRadius: 10,
              }}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Fifthpage;
