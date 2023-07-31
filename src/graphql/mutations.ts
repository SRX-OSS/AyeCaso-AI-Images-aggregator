/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSaved = /* GraphQL */ `
  mutation CreateSaved(
    $input: CreateSavedInput!
    $condition: ModelSavedConditionInput
  ) {
    createSaved(input: $input, condition: $condition) {
      id
      user_id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateSaved = /* GraphQL */ `
  mutation UpdateSaved(
    $input: UpdateSavedInput!
    $condition: ModelSavedConditionInput
  ) {
    updateSaved(input: $input, condition: $condition) {
      id
      user_id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteSaved = /* GraphQL */ `
  mutation DeleteSaved(
    $input: DeleteSavedInput!
    $condition: ModelSavedConditionInput
  ) {
    deleteSaved(input: $input, condition: $condition) {
      id
      user_id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createLiked = /* GraphQL */ `
  mutation CreateLiked(
    $input: CreateLikedInput!
    $condition: ModelLikedConditionInput
  ) {
    createLiked(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateLiked = /* GraphQL */ `
  mutation UpdateLiked(
    $input: UpdateLikedInput!
    $condition: ModelLikedConditionInput
  ) {
    updateLiked(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteLiked = /* GraphQL */ `
  mutation DeleteLiked(
    $input: DeleteLikedInput!
    $condition: ModelLikedConditionInput
  ) {
    deleteLiked(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createSupport = /* GraphQL */ `
  mutation CreateSupport(
    $input: CreateSupportInput!
    $condition: ModelSupportConditionInput
  ) {
    createSupport(input: $input, condition: $condition) {
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
export const updateSupport = /* GraphQL */ `
  mutation UpdateSupport(
    $input: UpdateSupportInput!
    $condition: ModelSupportConditionInput
  ) {
    updateSupport(input: $input, condition: $condition) {
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
export const deleteSupport = /* GraphQL */ `
  mutation DeleteSupport(
    $input: DeleteSupportInput!
    $condition: ModelSupportConditionInput
  ) {
    deleteSupport(input: $input, condition: $condition) {
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
export const createImagePost = /* GraphQL */ `
  mutation CreateImagePost(
    $input: CreateImagePostInput!
    $condition: ModelImagePostConditionInput
  ) {
    createImagePost(input: $input, condition: $condition) {
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
export const updateImagePost = /* GraphQL */ `
  mutation UpdateImagePost(
    $input: UpdateImagePostInput!
    $condition: ModelImagePostConditionInput
  ) {
    updateImagePost(input: $input, condition: $condition) {
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
export const deleteImagePost = /* GraphQL */ `
  mutation DeleteImagePost(
    $input: DeleteImagePostInput!
    $condition: ModelImagePostConditionInput
  ) {
    deleteImagePost(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createGallery = /* GraphQL */ `
  mutation CreateGallery(
    $input: CreateGalleryInput!
    $condition: ModelGalleryConditionInput
  ) {
    createGallery(input: $input, condition: $condition) {
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
export const updateGallery = /* GraphQL */ `
  mutation UpdateGallery(
    $input: UpdateGalleryInput!
    $condition: ModelGalleryConditionInput
  ) {
    updateGallery(input: $input, condition: $condition) {
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
export const deleteGallery = /* GraphQL */ `
  mutation DeleteGallery(
    $input: DeleteGalleryInput!
    $condition: ModelGalleryConditionInput
  ) {
    deleteGallery(input: $input, condition: $condition) {
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
