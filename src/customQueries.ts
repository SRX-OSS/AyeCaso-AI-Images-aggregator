export const getUserInitials = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      tagline
      picture
    }
  }
`;

export const getImagePostLikes = /* GraphQL */ `
  query GetImagePost($id: ID!) {
    getImagePost(id: $id) {
      likesCount
    }
  }
`;

export const listImagePostByViews = `query SearchImagePosts($limit: Int, $nextToken: String) {
  searchImagePosts(
    sort: { field: viewsCount, direction: desc },
    limit: $limit,
    nextToken: $nextToken
  ) {
    items {
      id
      title
      viewsCount
      imageKey
    }
    nextToken
  }
}`;

export const getImagePostViews = /* GraphQL */ `
  query GetImagePost($id: ID!) {
    getImagePost(id: $id) {
      viewsCount
    }
  }
`;

export const getProfileTotalScore = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      likesCount
      reachCount
    }
  }
`;

export const updateImagePostLikes = /* GraphQL */ `
  mutation UpdateImagePost(
    $input: UpdateImagePostInput!
    $condition: ModelImagePostConditionInput
  ) {
    updateImagePost(input: $input, condition: $condition) {
      id
      likesCount
      __typename
    }
  }
`;
export const updateImagePostViews = /* GraphQL */ `
  mutation UpdateImagePost(
    $input: UpdateImagePostInput!
    $condition: ModelImagePostConditionInput
  ) {
    updateImagePost(input: $input, condition: $condition) {
      id
      viewsCount
      __typename
    }
  }
`;
