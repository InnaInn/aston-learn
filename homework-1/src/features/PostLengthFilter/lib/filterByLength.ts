function filterByLength<T extends { title: string }>(
  posts: T[],
  minLength: number
): T[] {
  return posts.filter(post => post.title.length >= minLength);
}

export { filterByLength };