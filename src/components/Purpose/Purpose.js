import React from "react";
import { Typography, Paper, Grid, Container } from "@material-ui/core";

const Purpose = () => {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} container>
          <Paper
            elevation={16}
            style={{
              padding: 24,
              width: "100%",
              display: "flex",
              flexDirection: "column",
              height: "70%",
            }}
          >
            <Typography
              variant="h4"
              gutterBottom
              style={{
                color: "#ff7704",
                height: "5vh",
                fontWeight: "bold",
                fontSize: "1.5rem",
              }}
            >
              VISION
            </Typography>
            <Typography variant="body1" align="justify" style={{ flexGrow: 1 }}>
              The country's leading partner in technology-integrated accounting
              innovations.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} container>
          <Paper
            elevation={16}
            style={{
              padding: 24,
              display: "flex",
              width: "100%",

              flexDirection: "column",
              height: "70%",
            }}
          >
            <Typography
              variant="h4"
              gutterBottom
              style={{
                color: "#ff7704",
                height: "5vh",
                fontWeight: "bold",
                fontSize: "1.5rem",
              }}
            >
              MISSION
            </Typography>
            <Typography variant="body1" align="justify" style={{ flexGrow: 1 }}>
              Radztech Business Solutions provides technology-integrated
              accounting solutions aiming to help our clients improve their
              business value.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={16} style={{ padding: 24 }}>
            <Typography
              variant="h4"
              gutterBottom
              style={{
                color: "#ff7704",
                height: "5vh",
                fontWeight: "bold",
                fontSize: "1.5rem",
              }}
            >
              PURPOSE OF INTERNSHIP
            </Typography>
            <Typography
              variant="body1"
              align="justify"
              style={{ flexGrow: 1, marginTop: "3vh " }}
            >
              &nbsp;&nbsp;&nbsp;&nbsp;The internship program is designed to
              serve as a valuable opportunity for students to gain firsthand
              experience in the corporate world, closely aligned with their
              chosen professional career paths. Through this program, students
              will be immersed in real-life business environments, allowing them
              to apply theoretical knowledge acquired in their academic studies
              to practical, everyday situations. This exposure not only helps
              bridge the gap between classroom learning and professional
              practice but also equips students with a deeper understanding of
              industry-specific practices, workplace dynamics, and professional
              expectations. By participating in this internship program,
              students will develop essential skills, gain critical insights
              into their future careers, and build a network of professional
              contacts that can support their career growth and aspirations.
              Ultimately, the program aims to prepare students for a successful
              transition from academic life to professional endeavors, ensuring
              they are well-prepared to meet the challenges and demands of their
              chosen fields.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Purpose;
