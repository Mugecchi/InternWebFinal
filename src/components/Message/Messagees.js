import React from "react";
import "./Messagee.css";
import Ado from "../Teams/InternImages/Dev Ado.png";

const Message = () => {
  const notes = [
    {
      id: 1,
      color: "white",
      message: (
        <div>
          <img
            src={Ado}
            alt="Image"
            style={{
              width: "150px",
              height: "200px",
              margin: "10px auto",
              display: "block",
              float: "right",
              marginRight: "-20px",
              marginTop: "-35px",
              padding: 20,
            }}
          />
          <p>
            <span style={{ fontSize: 20, fontWeight: 800 }}>
              Adonis A. Maranan
            </span>{" "}
            <br />{" "}
            <span style={{ fontSize: 20, fontWeight: 800 }}>
              Developer Team
            </span>
            <br /> <br />
            &nbsp;&nbsp;&nbsp;&nbsp;"On behalf of the entire Marketing team, I
            want to extend our warmest congratulations to you on completing your
            internship with us. Your enthusiasm, creativity, and dedication have
            made a significant impact during your time here.
            <br /> <br />
            &nbsp;&nbsp;&nbsp;&nbsp;From assisting with market research to
            contributing to social media campaigns, your insights and hard work
            have been invaluable to our team's success. We've been impressed by
            your ability to adapt to new challenges and your eagerness to learn.
            <br /> <br />
            &nbsp;&nbsp;&nbsp;&nbsp;We have no doubt that you will continue to
            excel in your future endeavors, and we hope that the experiences
            gained during your internship with us will serve as a strong
            foundation for your career in marketing.
            <br /> <br />
            &nbsp;&nbsp;&nbsp;&nbsp;Best wishes for your future endeavors!
            <br /> <br />
            &nbsp;&nbsp;&nbsp;&nbsp;Warm regards,
          </p>
        </div>
      ),
    },
    {
      id: 2,
      color: "white",
      message: (
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;"On behalf of the entire Marketing team, I
          want to extend our warmest congratulations to you on completing your
          internship with us. Your enthusiasm, creativity, and dedication have
          made a significant impact during your time here.
          <br /> <br />
          &nbsp;&nbsp;&nbsp;&nbsp;From assisting with market research to
          contributing to social media campaigns, your insights and hard work
          have been invaluable to our team's success. We've been impressed by
          your ability to adapt to new challenges and your eagerness to learn.
          <br /> <br />
          &nbsp;&nbsp;&nbsp;&nbsp;We have no doubt that you will continue to
          excel in your future endeavors, and we hope that the experiences
          gained during your internship with us will serve as a strong
          foundation for your career in marketing.
          <br /> <br />
          &nbsp;&nbsp;&nbsp;&nbsp;Best wishes for your future endeavors!
          <br /> <br />
          &nbsp;&nbsp;&nbsp;&nbsp;Warm regards,
        </p>
      ),
    },
    {
      id: 3,
      color: "white",
      message: (
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;"On behalf of the entire Marketing team, I
          want to extend our warmest congratulations to you on completing your
          internship with us. Your enthusiasm, creativity, and dedication have
          made a significant impact during your time here.
          <br /> <br />
          &nbsp;&nbsp;&nbsp;&nbsp;From assisting with market research to
          contributing to social media campaigns, your insights and hard work
          have been invaluable to our team's success. We've been impressed by
          your ability to adapt to new challenges and your eagerness to learn.
          <br /> <br />
          &nbsp;&nbsp;&nbsp;&nbsp;We have no doubt that you will continue to
          excel in your future endeavors, and we hope that the experiences
          gained during your internship with us will serve as a strong
          foundation for your career in marketing.
          <br /> <br />
          &nbsp;&nbsp;&nbsp;&nbsp;Best wishes for your future endeavors!
          <br /> <br />
          &nbsp;&nbsp;&nbsp;&nbsp;Warm regards,
        </p>
      ),
    },
    {
      id: 4,
      color: "white",
      message: (
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;"On behalf of the entire Marketing team, I
          want to extend our warmest congratulations to you on completing your
          internship with us. Your enthusiasm, creativity, and dedication have
          made a significant impact during your time here.
          <br /> <br />
          &nbsp;&nbsp;&nbsp;&nbsp;From assisting with market research to
          contributing to social media campaigns, your insights and hard work
          have been invaluable to our team's success. We've been impressed by
          your ability to adapt to new challenges and your eagerness to learn.
          <br /> <br />
          &nbsp;&nbsp;&nbsp;&nbsp;We have no doubt that you will continue to
          excel in your future endeavors, and we hope that the experiences
          gained during your internship with us will serve as a strong
          foundation for your career in marketing.
          <br /> <br />
          &nbsp;&nbsp;&nbsp;&nbsp;Best wishes for your future endeavors!
          <br /> <br />
          &nbsp;&nbsp;&nbsp;&nbsp;Warm regards,
        </p>
      ),
    },
    {
      id: 5,
      color: "white",
      message: (
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;"On behalf of the entire Marketing team, I
          want to extend our warmest congratulations to you on completing your
          internship with us. Your enthusiasm, creativity, and dedication have
          made a significant impact during your time here.
          <br /> <br />
          &nbsp;&nbsp;&nbsp;&nbsp;From assisting with market research to
          contributing to social media campaigns, your insights and hard work
          have been invaluable to our team's success. We've been impressed by
          your ability to adapt to new challenges and your eagerness to learn.
          <br /> <br />
          &nbsp;&nbsp;&nbsp;&nbsp;We have no doubt that you will continue to
          excel in your future endeavors, and we hope that the experiences
          gained during your internship with us will serve as a strong
          foundation for your career in marketing.
          <br /> <br />
          &nbsp;&nbsp;&nbsp;&nbsp;Best wishes for your future endeavors!
          <br /> <br />
          &nbsp;&nbsp;&nbsp;&nbsp;Warm regards,
        </p>
      ),
    },
    {
      id: 6,
      color: "white",
      message: (
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;"On behalf of the entire Marketing team, I
          want to extend our warmest congratulations to you on completing your
          internship with us. Your enthusiasm, creativity, and dedication have
          made a significant impact during your time here.
          <br /> <br />
          &nbsp;&nbsp;&nbsp;&nbsp;From assisting with market research to
          contributing to social media campaigns, your insights and hard work
          have been invaluable to our team's success. We've been impressed by
          your ability to adapt to new challenges and your eagerness to learn.
          <br /> <br />
          &nbsp;&nbsp;&nbsp;&nbsp;We have no doubt that you will continue to
          excel in your future endeavors, and we hope that the experiences
          gained during your internship with us will serve as a strong
          foundation for your career in marketing.
          <br /> <br />
          &nbsp;&nbsp;&nbsp;&nbsp;Best wishes for your future endeavors!
          <br /> <br />
          &nbsp;&nbsp;&nbsp;&nbsp;Warm regards,
        </p>
      ),
    },
  ];

  return (
    <div className="notes-grid">
      {notes.map((note) => (
        <div
          key={note.id}
          className="note"
          style={{ backgroundColor: note.color }}
        >
          <div className="pin"></div>
          <div className="note-content"> {note.message}</div>
        </div>
      ))}
    </div>
  );
};

export default Message;
