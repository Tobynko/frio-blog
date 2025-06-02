import { postType, fetchQueryType } from "./fetchPosts.d";

const apiUrl = "https://dummyjson.com/posts/";

export async function fetchPosts({ limit, skip }: fetchQueryType = {}): Promise<
  postType[]
> {
  try {
    const response = await fetch(
      `${apiUrl}?sortBy=id&order=desc&limit=${limit}&skip=${skip}`,
      {
        cache: "no-store", // Fresh data po kazdom requeste
      }
    );

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error("Posts not found");
      } else if (response.status >= 500) {
        throw new Error("Server error occurred");
      } else {
        throw new Error(`HTTP error: ${response.status}`);
      }
    }

    const fetchedPosts = await response.json();

    if (!fetchedPosts.posts) {
      throw new Error("Invalid API response: No posts found");
    }

    return fetchedPosts.posts as postType[];
  } catch (error) {
    if (
      error instanceof TypeError &&
      error.message.includes("Failed to fetch")
    ) {
      throw new Error("No internet connection or API unreachable");
    }
    throw error;
  }
}

export async function fetchPostID(id: number): Promise<postType> {
  try {
    const response = await fetch(`${apiUrl}${id}`, {
      cache: "no-store",
    });

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error("Posts not found");
      } else if (response.status >= 500) {
        throw new Error("Server error occurred");
      } else {
        throw new Error(`HTTP error: ${response.status}`);
      }
    }

    return await response.json();
  } catch (error) {
    if (
      error instanceof TypeError &&
      error.message.includes("Failed to fetch")
    ) {
      throw new Error("No internet connection or API unreachable");
    }
    throw error;
  }
}
