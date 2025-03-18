const apiUrl = "https://dummyjson.com/posts/";

export async function fetchPosts({ limit, skip } = {}) {
  try {
    const response = await fetch(
      `${apiUrl}?sortBy=id&order=desc&limit=${limit}&skip=${skip}`,
      {
        cache: "no-store",
      }
    );
    const fetchedPosts = await response.json();
    return fetchedPosts.posts;
  } catch (error) {
    console.error("Error fetching posts:", error.message);
    return null;
  }
}

export async function fetchPostID(id) {
  try {
    const response = await fetch(`${apiUrl}${id}`, {
      cache: "no-store", // fresh data po kazdom requeste
    });
    return await response.json();
  } catch (error) {
    console.error("Error fetching posts:", error.message);
    return null;
  }
}
