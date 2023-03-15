import { useTheme } from "@mui/material/styles";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { ChangeEvent, ChangeEventHandler, FormEvent, MutableRefObject } from "react";

const BlogSearchBar = (props: {
  value: string;
  handleOnChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>  ) => void;
}) => {
  const theme = useTheme();

  return (
    <FormControl sx={{ my: 8, width: "100%" }} variant="standard">
      <InputLabel
        shrink
        htmlFor="standard-adornment-password"
        sx={{
          color: "text.primary",
          opacity: 0.7,
        }}
      >
        Search
      </InputLabel>
      <Input
        sx={{
          borderBottom: `1px solid ${theme.palette.text.primary}`,
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
      />
    </FormControl>
  );
};

export default BlogSearchBar;
