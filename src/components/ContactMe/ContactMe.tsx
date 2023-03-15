import {
  Box,
  CircularProgress,
  Grid,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import BodyWrapper from "../Common/BodyWrapper";
import CustomDivider from "../Common/CustomDivider";
import PrimaryBtn from "../Buttons/PrimaryBtn";
import SectionHeader from "../Common/SectionHeader";
import FormControl from "@mui/material/FormControl";
import { FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";
import DoneIcon from "@mui/icons-material/Done";
import FormResult from "../../common/enums/contact-me";
import SocialMediaInfo from "../../common/data/social-media";
import ContactItem from "./ContactItem";

const SERVICE_ID = "service_5mqe8ro";
const TEMPLATE_ID = "template_nqkyk6d";
const PUBLIC_KEY = "kXfpGCejRFYl3eeO4";

const ContactMe = () => {
  const theme = useTheme();

  const [formResult, setFormResult] = useState<FormResult>(
    FormResult.notSubmitted
  );

  const [isSending, setIsSending] = useState<boolean>(false);

  const labelStyles = { color: "text.primary", opacity: 0.8 };

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const target = e.target as HTMLFormElement;

    const templateParams = {
      reply_to: target.email.value,
      from_name: target.from_name.value,
      message: target.message.value,
    };

    setIsSending(true);
    setFormResult(FormResult.notSubmitted);
    console.log("templateParams");
    console.log(templateParams);

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY).then(
      (result) => {
        console.log(result.text);
        setIsSending(false);
        setFormResult(FormResult.Success);
        target.reset();

        setTimeout(() => {
          setFormResult(FormResult.notSubmitted);
        }, 3000);
      },
      (error) => {
        console.log(error.text);
        setIsSending(false);
        setFormResult(FormResult.Failed);
      }
    );
  };

  return (
    <>
      <CustomDivider />
      <BodyWrapper>
        <FormControl
          component="form"
          onSubmit={handleOnSubmit}
          sx={{
            width: "100%",
          }}
        >
          <Grid
            container
            sx={{
              displacy: "flex",
              justifyContent: "emd",
              alignItems: "center",
            }}
            xs={12}
          >
            <Grid item xs={4}>
              <SectionHeader title={"contact"} />
            </Grid>
            <Grid item lg={4} xs={8}></Grid>
            <Grid
              item
              lg={4}
              // md={3}
              xs={6}
              gap={{ md: 0, xs: 2 }}
              sx={{
                display: "flex",
                justifyContent: "space-between",

                [theme.breakpoints.down("lg")]: {
                  my: 4,
                },
                [theme.breakpoints.down("md")]: {
                  flexWrap: "wrap",
                },
              }}
            >
              <ContactItem
                title={"linkedin"}
                href={SocialMediaInfo.linkedIn.url}
              />
              <ContactItem
                title={"twitter"}
                href={SocialMediaInfo.twitter.url}
              />
              <ContactItem
                title={"github"}
                href={SocialMediaInfo.github.url}
              />
            </Grid>
          </Grid>

          <Box my={{sm:10,xs:2}} />

          <Box>
            <Grid container>
              <Grid item xs={0} lg={3}>
                {" "}
              </Grid>

              <Grid
                item
                xs={12}
                lg={9}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  columnGap: 6,
                  [theme.breakpoints.down("sm")]: {
                    flexWrap: "wrap",
                    rowGap: 7,
                  },
                }}
              >
                <TextField
                  id="from_name"
                  label="name"
                  type="text"
                  name="from_name"
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="standard"
                  required
                  sx={{
                    label: labelStyles,
                    div: {
                      borderBottom: `1px solid ${theme.palette.text.primary}`,
                    },
                  }}
                />

                <TextField
                  id="email"
                  label="email"
                  type="email"
                  name="email"
                  fullWidth
                  required
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="standard"
                  sx={{
                    label: labelStyles,
                    div: {
                      borderBottom: `1px solid ${theme.palette.text.primary}`,
                    },
                  }}
                />
              </Grid>
            </Grid>

            <Box my={{ xs: 8, lg: 12 }} />

            <Grid container>
              <Grid item xs={0} lg={3}></Grid>
              <Grid item xs={12} lg={9}>
                <TextField
                  id="message"
                  label="message"
                  type="text"
                  name="message"
                  required
                  InputLabelProps={{
                    shrink: true,
                  }}
                  // helperText="helperText"
                  multiline
                  fullWidth
                  minRows={8}
                  maxRows={12}
                  variant="standard"
                  sx={{
                    label: labelStyles,
                    div: {
                      borderBottom: `1px solid ${theme.palette.text.primary}`,
                    },
                  }}
                />

                {formResult === FormResult.Failed && (
                  <Typography
                    color={"error"}
                    variant={"body2"}
                    sx={{
                      textAlign: { xs: "left" },
                      mt: 2,
                    }}
                  >
                    {
                      "Something went wrong whilst sending your message. Please try again."
                    }
                  </Typography>
                )}
              </Grid>
            </Grid>
          </Box>

          <Box
            sx={{
              width: "100% ",
              display: "flex",
              justifyContent: "end",
            }}
          >
            {isSending ? (
              <CircularProgress
                color="secondary"
                sx={{
                  mt: 7,
                  mr: 0,
                }}
              />
            ) : formResult === FormResult.Success ? (
              <DoneIcon
                fontSize="large"
                color="success"
                sx={{
                  mt: 7,
                  mr: 0,
                }}
              />
            ) : (
              <PrimaryBtn
                sx={{ mt: 7 }}
                type={"submit"}
                title={"submit"}
                onClick={() => {}}
              />
            )}
          </Box>

          <Box my={{ lg: 10, xs: 5 }} />
        </FormControl>
      </BodyWrapper>
    </>
  );
};

export default ContactMe;
