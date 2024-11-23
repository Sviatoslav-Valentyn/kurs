import { jest } from "@jest/globals";
import axios from "axios";
import { fetchPosts, fetchPost, fetchPostAnswer, fetchUserPosts } from "./postService.js"; // Замініть шлях на реальний

jest.mock("axios");

describe("API Service Tests", () => {
  afterEach(() => {
    jest.clearAllMocks(); // Очищуємо моки після кожного тесту
  });

  test("fetchPosts should return mocked data", async () => {
    const mockResponse = { data: { items: [{ id: 1, title: "Test Post" }] } };
    axios.get.mockResolvedValueOnce(mockResponse);

    const response = await fetchPosts("react", "title");

    expect(response.data.items[0].title).toBe("Test Post");
    expect(axios.get).toHaveBeenCalledWith(
      `${process.env.REACT_APP_API_BASE_LINK}/2.3/search?order=desc&sort=relevance&intitle=react&site=stackoverflow`
    );
    expect(axios.get).toHaveBeenCalledTimes(1);
  });

  test("fetchPost should fetch a specific post by ID", async () => {
    const mockResponse = { data: { items: [{ id: 123, body: "Post Body" }] } };
    const postId = 123;
    axios.get.mockResolvedValueOnce(mockResponse);

    const response = await fetchPost(postId);

    expect(response.data.items[0].body).toBe("Post Body");
    expect(axios.get).toHaveBeenCalledWith(
      `${process.env.REACT_APP_API_BASE_LINK}/2.3/questions/${postId}?order=desc&sort=activity&site=stackoverflow&filter=withbody`
    );
    expect(axios.get).toHaveBeenCalledTimes(1);
  });

  test("fetchPostAnswer should fetch answers for a specific post ID", async () => {
    const mockResponse = { data: { items: [{ answer_id: 456, body: "Answer Body" }] } };
    const postId = 123;
    axios.get.mockResolvedValueOnce(mockResponse);

    const response = await fetchPostAnswer(postId);

    expect(response.data.items[0].body).toBe("Answer Body");
    expect(axios.get).toHaveBeenCalledWith(
      `${process.env.REACT_APP_API_BASE_LINK}/2.3/questions/${postId}/answers?order=desc&sort=votes&site=stackoverflow&filter=withbody`
    );
    expect(axios.get).toHaveBeenCalledTimes(1);
  });

  test("fetchUserPosts should fetch posts for a specific user ID", async () => {
    const mockResponse = { data: { items: [{ id: 789, title: "User Post" }] } };
    const userId = 456;
    axios.get.mockResolvedValueOnce(mockResponse);

    const response = await fetchUserPosts(userId);

    expect(response.data.items[0].title).toBe("User Post");
    expect(axios.get).toHaveBeenCalledWith(
      `${process.env.REACT_APP_API_BASE_LINK}/2.3/users/${userId}/questions?order=desc&sort=votes&site=stackoverflow`
    );
    expect(axios.get).toHaveBeenCalledTimes(1);
  });

  test("fetchPosts should handle errors gracefully", async () => {
    const errorMessage = "Network Error";
    axios.get.mockRejectedValueOnce(new Error(errorMessage));

    await expect(fetchPosts("errorQuery", "title")).rejects.toThrow(errorMessage);

    expect(axios.get).toHaveBeenCalledWith(
      `${process.env.REACT_APP_API_BASE_LINK}/2.3/search?order=desc&sort=relevance&intitle=errorQuery&site=stackoverflow`
    );
    expect(axios.get).toHaveBeenCalledTimes(1);
  });
});
