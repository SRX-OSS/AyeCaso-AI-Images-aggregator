/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSaved = /* GraphQL */ `
  query GetSaved($id: ID!) {
    getSaved(id: $id) {
      id
      user_id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listSaveds = /* GraphQL */ `
  query ListSaveds(
    $id: ID
    $filter: ModelSavedFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listSaveds(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        user_id
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getLiked = /* GraphQL */ `
  query GetLiked($id: ID!) {
    getLiked(id: $id) {
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listLikeds = /* GraphQL */ `
  query ListLikeds(
    $id: ID
    $filter: ModelLikedFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listLikeds(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getSupport = /* GraphQL */ `
  query GetSupport($id: ID!) {
    getSupport(id: $id) {
      id
      user_id
      email
      issue_type
      subject
      details
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listSupports = /* GraphQL */ `
  query ListSupports(
    $id: ID
    $filter: ModelSupportFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listSupports(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        user_id
        email
        issue_type
        subject
        details
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const savedPostByDate = /* GraphQL */ `
  query SavedPostByDate(
    $user_id: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelSavedFilterInput
    $limit: Int
    $nextToken: String
  ) {
    savedPostByDate(
      user_id: $user_id
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        user_id
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getImagePost = /* GraphQL */ `
  query GetImagePost($id: ID!) {
    getImagePost(id: $id) {
      id
      user_id
      gallery_id
      title
      imageKey
      description
      creator_model
      likesCount
      viewsCount
      isPrivate
      isCopyrighted
      isNSFW
      tags
      category
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listImagePosts = /* GraphQL */ `
  query ListImagePosts(
    $id: ID
    $filter: ModelImagePostFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listImagePosts(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        user_id
        gallery_id
        title
        imageKey
        description
        creator_model
        likesCount
        viewsCount
        isPrivate
        isCopyrighted
        isNSFW
        tags
        category
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const profilePostByDate = /* GraphQL */ `
  query ProfilePostByDate(
    $user_id: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelImagePostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    profilePostByDate(
      user_id: $user_id
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        user_id
        gallery_id
        title
        imageKey
        description
        creator_model
        likesCount
        viewsCount
        isPrivate
        isCopyrighted
        isNSFW
        tags
        category
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const profilePostByViews = /* GraphQL */ `
  query ProfilePostByViews(
    $user_id: ID!
    $viewsCount: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelImagePostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    profilePostByViews(
      user_id: $user_id
      viewsCount: $viewsCount
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        user_id
        gallery_id
        title
        imageKey
        description
        creator_model
        likesCount
        viewsCount
        isPrivate
        isCopyrighted
        isNSFW
        tags
        category
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const galleryPostByDate = /* GraphQL */ `
  query GalleryPostByDate(
    $gallery_id: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelImagePostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    galleryPostByDate(
      gallery_id: $gallery_id
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        user_id
        gallery_id
        title
        imageKey
        description
        creator_model
        likesCount
        viewsCount
        isPrivate
        isCopyrighted
        isNSFW
        tags
        category
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const searchImagePosts = /* GraphQL */ `
  query SearchImagePosts(
    $filter: SearchableImagePostFilterInput
    $sort: [SearchableImagePostSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableImagePostAggregationInput]
  ) {
    searchImagePosts(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
        id
        user_id
        gallery_id
        title
        imageKey
        description
        creator_model
        likesCount
        viewsCount
        isPrivate
        isCopyrighted
        isNSFW
        tags
        category
        createdAt
        updatedAt
        __typename
      }
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
              __typename
            }
          }
        }
        __typename
      }
      __typename
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      tagline
      likesCount
      reachCount
      isDisabled
      picture
      theme
      dob
      links
      communication_emails
      marketing_emails
      social_emails
      security_emails
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $id: ID
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUsers(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        username
        tagline
        likesCount
        reachCount
        isDisabled
        picture
        theme
        dob
        links
        communication_emails
        marketing_emails
        social_emails
        security_emails
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getGallery = /* GraphQL */ `
  query GetGallery($id: ID!) {
    getGallery(id: $id) {
      id
      user_id
      gallery_name
      gallery_description
      isPrivate
      avatar
      post_counts
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listGalleries = /* GraphQL */ `
  query ListGalleries(
    $id: ID
    $filter: ModelGalleryFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listGalleries(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        user_id
        gallery_name
        gallery_description
        isPrivate
        avatar
        post_counts
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const galleriesByUser_id = /* GraphQL */ `
  query GalleriesByUser_id(
    $user_id: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelGalleryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    galleriesByUser_id(
      user_id: $user_id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        user_id
        gallery_name
        gallery_description
        isPrivate
        avatar
        post_counts
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
