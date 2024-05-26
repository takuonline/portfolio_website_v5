"use client";

import BodyWrapper from "../../components/Common/BodyWrapper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import HighlightTypography from "../../components/Common/HighlightTypography";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CategoryTitleItem from "../../components/blog/CategoryTitleItem";
import BlogPostItem from "../../components/blog/BlogPostItem";
import BlogSearchBar from "../../components/blog/BlogSearchBar";
import React, { ChangeEvent, useMemo, useState } from "react";
import { SanityDocument } from "next-sanity";

// type BlogPost = {
//   title: string;
//   desc: string;
//   namedCategories: { title: string }[];
// };

type Category = {
  title: string;
  isSelected: boolean;
};

type BlogProps = {
  posts: SanityDocument[];
  processedCategories: Category[];
};

const filterData = (data: SanityDocument[], keys: string[]) => {
  return data.filter((post) => {
    for (let key of keys) {
      let categories = post.namedCategories.map(
        (v: { title: string }) => v.title,
      );

      for (let category of categories) {
        if (category.toLowerCase() == key.toLowerCase()) {
          return true;
        }
      }
    }

    return false;
  });
};

export default function Blog({ posts, processedCategories }: BlogProps) {
  const [categories, setCategories] = useState<Category[]>(processedCategories);
  const [searchInput, setSearchInput] = useState<string>("");

  const handleFilterCategories = (title: string) => {
    setCategories((oldState) => {
      // change value of the category selected by either turning on or off
      const newState: Category[] = oldState.map((category) => ({
        title: category.title,
        isSelected:
          category.title == title ? !category.isSelected : category.isSelected,
      }));
      return newState;
    });
  };

  const handleSearch = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setSearchInput(event?.target?.value.toLowerCase());
  };

  const blogPosts = useMemo(() => {
    // Filter on search input
    const searchResults = posts.filter((v: SanityDocument) =>
      v.title.toLowerCase().includes(searchInput.toLowerCase()),
    );

    // only filter when a person selects a category
    let selectedCategories: string[];

    if (categories.filter((v: Category) => v.isSelected).length == 0) {
      // when no selection is made show all categories
      selectedCategories = categories.map((v: Category) => v.title);
    } else {
      // has made at least one selection
      selectedCategories = categories
        .filter((v: Category) => v.isSelected)
        .map((v: Category) => v.title);
    }

    // filter categories
    const catFilterResults = filterData(searchResults, selectedCategories);

    return catFilterResults;
  }, [searchInput, posts, categories]);

  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          zIndex: 2,
          position: "relative",
        }}
        pt={20}
      >
        <BodyWrapper>
          <Grid
            container
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Grid item lg={4} xs={12}>
              <Typography variant="h1" mb={{ xs: 5 }}>
                <HighlightTypography
                  backgroundSize="auto 25%"
                  backgroundPosition="10% 100%"
                >
                  {"Blog"}
                </HighlightTypography>
              </Typography>

              <Typography variant={"body2"}>
                {`My goal with this blog is to record my personal growth journey, including both successes and setbacks,
                in the hopes of inspiring and encouraging others to pursue their own paths of self-improvement.`}
                <br />
                {` By sharing my experiences and insights, I aspire to create a community where we can learn and grow together.`}
              </Typography>

              <BlogSearchBar
                value={searchInput}
                handleOnChange={handleSearch}
              />

              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  columnGap: 3,
                  rowGap: 2,
                  [theme.breakpoints.down("md")]: {
                    rowGap: 1,
                    columnGap: 1,
                  },
                }}
              >
                {categories &&
                  categories.map((v) => {
                    return (
                      <CategoryTitleItem
                        key={v.title}
                        title={v.title}
                        isSelected={v.isSelected}
                        onSelect={handleFilterCategories}
                      />
                    );
                  })}
              </Box>
            </Grid>

            <Grid
              item
              lg={7}
              mr={{ md: 0, xs: 0 }}
              mt={{ xs: 7, md: 0 }}
              xs={12}
            >
              {blogPosts &&
                blogPosts.map((v) => (
                  <BlogPostItem key={v.title} blogPost={v} />
                ))}
            </Grid>
          </Grid>
        </BodyWrapper>
      </Box>
    </>
  );
}
