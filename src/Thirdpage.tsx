import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import AssessmentIcon from "@mui/icons-material/Assessment";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import SchoolIcon from "@mui/icons-material/School";
import MessageIcon from "@mui/icons-material/Message";
import Groups2Icon from "@mui/icons-material/Groups2";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import Button from "@mui/material/Button";
import { useMediaQuery } from "@mui/material";

const Thirdpage = () => {
  const headingStyle = {
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "0.5rem",
  };

  const paragraphStyle = {
    fontSize: "1rem",
    marginBottom: "1rem",
  };

  const isMobile = useMediaQuery("(max-width:600px)");

  const initialCards = [
    {
      icon: <AssessmentIcon style={{ fontSize: 40, color: "orange" }} />,
      title: "Teams Surveys & Reports",
      content:
        "Short, anonymous surveys track your team's needs weekly so you can focus.",
    },
    {
      icon: <ContactPageIcon style={{ fontSize: 40, color: "blue" }} />,
      title: "Collaborative 1:1",
      content: "Build relationships by planning 1-on-1s and start meetings.",
    },
    {
      icon: <SchoolIcon style={{ fontSize: 40, color: "#ad1b6a" }} />,
      title: "Learning Center",
      content:
        "Quickly get solutions tailored to your personal challenges from the manager.",
    },
    {
      icon: <MessageIcon style={{ fontSize: 40, color: "#e0218a" }} />,
      title: "Anonymous Messaging",
      content: "Develop trust in a safe channel for important conversations.",
    },
    {
      icon: <Groups2Icon style={{ fontSize: 40, color: "#000080" }} />,
      title: "Conversation Engine",
      content: "Communicate confidently with recommended talking points.",
    },
    {
      icon: <ManageAccountsIcon style={{ fontSize: 40, color: "#ffd700" }} />,
      title: "Exclusive Managers",
      content:
        "Access manager tips, activities, and best practices from our experts.",
    },
  ];

  const [showMore, setShowMore] = useState(false);

  const visibleCards = isMobile ? initialCards.slice(0, 3) : initialCards;

  return (
    <div
      style={{ maxWidth: "990px", margin: "150px auto 0", padding: "0 20px" }}
    >
      <h1
        style={{ textAlign: "center", fontSize: "50px", marginBottom: "1rem" }}
      >
        Make Your Work Easier
      </h1>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {visibleCards.map((card, index) => (
          <Card
            key={index}
            variant="outlined"
            style={{
              flexBasis: isMobile ? "100%" : "30%",
              marginBottom: "1rem",
            }}
          >
            <CardContent>
              {card.icon}
              <Typography variant="h5" style={headingStyle}>
                {card.title}
              </Typography>
              <Typography variant="body1" style={paragraphStyle}>
                {card.content}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>

      {isMobile && !showMore && (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <Button variant="outlined" onClick={() => setShowMore(true)}>
            View More Benefits
          </Button>
        </div>
      )}

      {isMobile && showMore && (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {initialCards.slice(3).map((card, index) => (
            <Card
              key={index}
              variant="outlined"
              style={{ flexBasis: "100%", marginBottom: "1rem" }}
            >
              <CardContent>
                {card.icon}
                <Typography variant="h5" style={headingStyle}>
                  {card.title}
                </Typography>
                <Typography variant="body1" style={paragraphStyle}>
                  {card.content}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default Thirdpage;
