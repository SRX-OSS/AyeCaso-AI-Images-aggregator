/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSaved = /* GraphQL */ `
  subscription OnCreateSaved($filter: ModelSubscriptionSavedFilterInput) {
    onCreateSaved(filter: $filter) {
      id
      user_id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateSaved = /* GraphQL */ `
  subscription OnUpdateSaved($filter: ModelSubscriptionSavedFilterInput) {
    onUpdateSaved(filter: $filter) {
      id
      user_id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteSaved = /* GraphQL */ `
  subscription OnDeleteSaved($filter: ModelSubscriptionSavedFilterInput) {
    onDeleteSaved(filter: $filter) {
      id
      user_id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateLiked = /* GraphQL */ `
  subscription OnCreateLiked($filter: ModelSubscriptionLikedFilterInput) {
    onCreateLiked(filter: $filter) {
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateLiked = /* GraphQL */ `
  subscription OnUpdateLiked($filter: ModelSubscriptionLikedFilterInput) {
    onUpdateLiked(filter: $filter) {
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteLiked = /* GraphQL */ `
  subscription OnDeleteLiked($filter: ModelSubscriptionLikedFilterInput) {
    onDeleteLiked(filter: $filter) {
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateSupport = /* GraphQL */ `
  subscription OnCreateSupport($filter: ModelSubscriptionSupportFilterInput) {
    onCreateSupport(filter: $filter) {
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
export const onUpdateSupport = /* GraphQL */ `
  subscription OnUpdateSupport($filter: ModelSubscriptionSupportFilterInput) {
    onUpdateSupport(filter: $filter) {
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
export const onDeleteSupport = /* GraphQL */ `
  subscription OnDeleteSupport($filter: ModelSubscriptionSupportFilterInput) {
    onDeleteSupport(filter: $filter) {
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
export const onCreateImagePost = /* GraphQL */ `
  subscription OnCreateImagePost(
    $filter: ModelSubscriptionImagePostFilterInput
    $user_id: String
  ) {
    onCreateImagePost(filter: $filter, user_id: $user_id) {
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
export const onUpdateImagePost = /* GraphQL */ `
  subscription OnUpdateImagePost(
    $filter: ModelSubscriptionImagePostFilterInput
    $user_id: String
  ) {
    onUpdateImagePost(filter: $filter, user_id: $user_id) {
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
export const onDeleteImagePost = /* GraphQL */ `
  subscription OnDeleteImagePost(
    $filter: ModelSubscriptionImagePostFilterInput
    $user_id: String
  ) {
    onDeleteImagePost(filter: $filter, user_id: $user_id) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser(
    $filter: ModelSubscriptionUserFilterInput
    $id: String
  ) {
    onCreateUser(filter: $filter, id: $id) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser(
    $filter: ModelSubscriptionUserFilterInput
    $id: String
  ) {
    onUpdateUser(filter: $filter, id: $id) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser(
    $filter: ModelSubscriptionUserFilterInput
    $id: String
  ) {
    onDeleteUser(filter: $filter, id: $id) {
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
export const onCreateGallery = /* GraphQL */ `
  subscription OnCreateGallery(
    $filter: ModelSubscriptionGalleryFilterInput
    $user_id: String
  ) {
    onCreateGallery(filter: $filter, user_id: $user_id) {
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
export const onUpdateGallery = /* GraphQL */ `
  subscription OnUpdateGallery(
    $filter: ModelSubscriptionGalleryFilterInput
    $user_id: String
  ) {
    onUpdateGallery(filter: $filter, user_id: $user_id) {
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
export const onDeleteGallery = /* GraphQL */ `
  subscription OnDeleteGallery(
    $filter: ModelSubscriptionGalleryFilterInput
    $user_id: String
  ) {
    onDeleteGallery(filter: $filter, user_id: $user_id) {
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
