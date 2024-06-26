import { useTheme } from "@mui/material/styles";
import FormControl from "@mui/material/FormControl";

import { ChangeEvent } from "react";
import TextField from "@mui/material/TextField";

const BlogSearchBar = (props: {
  value: string;
  handleOnChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
}) => {
  const theme = useTheme();

  return (
    <FormControl
      sx={{ mt: { md: 8, xs: 5 }, mb: { md: 8, xs: 3 }, width: "100%" }}
      variant="outlined"
    >
      <TextField
        id="from_name"
        placeholder="Search"
        type="text"
        name="from_name"
        fullWidth
        onChange={props.handleOnChange}
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
        required
        sx={{
          input: {
            borderRadius: 100,
            py: 2,
            px: 4,
          },
          fieldset: { borderRadius: 1000, px: 10 },
        }}
      />

      {/* <InputLabel
        shrink
        // htmlFor="standard-adornment-password"
        sx={{
          color: "text.primary",
          opacity: 0.7,
        }}
      >
        Search
      </InputLabel> */}

      {/* <Input
        sx={{
          border: `1px solid ${theme.palette.text.primary}`,
          borderRadius:"1000rem",
py:2
        }}
        value={props.value}
        onChange={props.handleOnChange}
        id="standard-adornment-search"
        type={"text"}
        endAdornment={
          <InputAdornment position="end">
            <IconButton aria-label="search blog post">
              <SearchIcon
                sx={{
                  color: "text.primary",
                }}
              />
            </IconButton>
          </InputAdornment>
        }
      /> */}
    </FormControl>
  );
};

export default BlogSearchBar;
