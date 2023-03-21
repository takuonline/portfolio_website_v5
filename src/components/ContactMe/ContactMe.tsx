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
import HighlightTypography from "../Common/HighlightTypography";

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
      <BodyWrapper>
        <FormControl
          component="form"
          onSubmit={handleOnSubmit}
          sx={{
            width: "100%",
            mt: 20,
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
            <Grid item xs={12}>
              <SectionHeader id={"contact"}>
                <HighlightTypography>{"Contact  "}</HighlightTypography>
                {" me"}
              </SectionHeader>
            </Grid>

            <Grid
              item
              lg={6}
              xs={6}
              gap={{ md: 0, xs: 2 }}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mt: 8,

                [theme.breakpoints.down("md")]: {
                  flexWrap: "wrap",
                },
              }}
            >
              <ContactItem
                title={"Linkedin"}
                href={SocialMediaInfo.linkedIn.url}
              />
              <ContactItem
                title={"Twitter"}
                href={SocialMediaInfo.twitter.url}
              />
              <ContactItem title={"Github"} href={SocialMediaInfo.github.url} />


            </Grid>
          </Grid>

          <Box my={{ sm: 6, xs: 2 }} />

          <Box>
            <Grid container gap={5}>
              <Grid item xs={12} sx={{}}>
                <TextField
                  id="from_name"
                  placeholder="Name"
                  type="text"
                  name="from_name"
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                  required
                  sx={{
                    label: labelStyles,
                    input: {
                      borderRadius: 100,
                      py: 3,
                      px: 5,
                    },
                    fieldset: { borderRadius: 1000, px: 10 },
                  }}
                />
              </Grid>

              <Grid
                item
                xs={12}
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
                  id="email"
                  placeholder="Email"
                  type="email"
                  name="email"
                  fullWidth
                  required
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                  sx={{
                    label: labelStyles,
                    fieldset: { borderRadius: 1000, px: 10 },
                    input: {
                      py: 3,
                      px: 5,
                    },
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  id="message"
                  placeholder="Message"
                  type="text"
                  name="message"
                  required
                  InputLabelProps={{
                    shrink: true,
                  }}
                  // helperText="helperText"
                  multiline
                  fullWidth
                  minRows={5}
                  maxRows={8}
                  variant="outlined"
                  sx={{
                    label: labelStyles,
                    fieldset: { borderRadius: 10, px: 10 },
                    textarea: {
                      py: 3,
                      px: 3,
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
                sx={{
                  mt: 7,
                  width: "100%",
                  backgroundColor: "primary.main",
                  color: "background.default",
                  py: 7,
                  // fontSize:30,
                  ":hover": {
                    color: "primary.main",
                  },

                  [theme.breakpoints.down("md")]: {
                    py: 4,
                  },
                }}
                type={"submit"}
                title={"SUBMIT"}
                onClick={() => {}}
                showIndicator={false}
              />
            )}
          </Box>

          <Box my={{ lg: 4, xs: 5 }} />
        </FormControl>
      </BodyWrapper>
    </>
  );
};

export default ContactMe;
