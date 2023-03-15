import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import PrimaryBtn from "../Buttons/PrimaryBtn";
import BodyWrapper from "../Common/BodyWrapper";
import HighlightTypography from "../Common/HighlightTypography";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// const ListItem = ()=>P

const MyServices = () => {
  return (
    <>
      <BodyWrapper>
        <Grid container gap={2}>
          <Grid item xs={5}>
            <Typography
              variant={"h1"}
              sx={{
                ml: 7,
              }}
            >
              {`My `}
              <br />

              <HighlightTypography
                sx={{
                  textIndent: "-4rem",
                }}
              >
                {"services"}
              </HighlightTypography>
            </Typography>

            <PrimaryBtn
              onClick={function (): void {
                throw new Error("Function not implemented.");
              }}
              title={"CONTACT ME"}
              sx={{
                backgroundColor: "primary.main",
                color: "background.default",
                py: 2,
                my: 7,
              }}
            />
          </Grid>

          <Grid item xs={5}>
            <List  >
              <ListItem
                disablePadding
                disableRipple
                disableTouchRipple

                secondaryAction={
                  <IconButton
                    aria-label="comment"
                    sx={{
                      p: 0,
                    }}

                  >
                    <ArrowForwardIcon
                      sx={{
                        p: 0,
                      }}
                      color={"primary"}
                      fontSize={"large"}
                    />
                  </IconButton>
                }
              >
                <ListItemButton
                  sx={{
                    p: 0,
                  }}
                  disableRipple
                >
                  <Typography variant="h3">{"Development"}</Typography>
                  <Typography
                    sx={{
                      verticalAlign: "super",

                      position: "relative",
                      top: " -1.2em",
                      fontSize: "80%",
                      opacity: 0.5,
                      ml: 2.5,
                      fontStyle:"italic"
                    }}
                    variant="body2"
                  >
                    {"01"}
                  </Typography>
                </ListItemButton>
              </ListItem>
              <Divider
                sx={{
                  my: 2,
                }}
              />
              <ListItem disablePadding>
                <ListItemButton component="a" href="#simple-list">
                  <ListItemText primary="Spam" />
                </ListItemButton>
              </ListItem>
              <Divider />
              <ListItem disablePadding>
                <ListItemButton component="a" href="#simple-list">
                  <ListItemText primary="Spam" />
                </ListItemButton>
              </ListItem>{" "}
              <Divider />
              <ListItem disablePadding>
                <ListItemButton component="a" href="#simple-list">
                  <ListItemText primary="Spam" />
                </ListItemButton>
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </BodyWrapper>
    </>
  );
};

export default MyServices;
