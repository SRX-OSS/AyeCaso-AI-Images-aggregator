/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateSavedInput = {
  id?: string | null,
  user_id: string,
  createdAt?: string | null,
};

export type ModelSavedConditionInput = {
  user_id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelSavedConditionInput | null > | null,
  or?: Array< ModelSavedConditionInput | null > | null,
  not?: ModelSavedConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Saved = {
  __typename: "Saved",
  id: string,
  user_id: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateSavedInput = {
  id: string,
  user_id?: string | null,
  createdAt?: string | null,
};

export type DeleteSavedInput = {
  id: string,
};

export type CreateLikedInput = {
  id?: string | null,
};

export type ModelLikedConditionInput = {
  and?: Array< ModelLikedConditionInput | null > | null,
  or?: Array< ModelLikedConditionInput | null > | null,
  not?: ModelLikedConditionInput | null,
};

export type Liked = {
  __typename: "Liked",
  id: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateLikedInput = {
  id: string,
};

export type DeleteLikedInput = {
  id: string,
};

export type CreateSupportInput = {
  id?: string | null,
  user_id?: string | null,
  email: string,
  issue_type: string,
  subject: string,
  details?: string | null,
};

export type ModelSupportConditionInput = {
  user_id?: ModelIDInput | null,
  email?: ModelStringInput | null,
  issue_type?: ModelStringInput | null,
  subject?: ModelStringInput | null,
  details?: ModelStringInput | null,
  and?: Array< ModelSupportConditionInput | null > | null,
  or?: Array< ModelSupportConditionInput | null > | null,
  not?: ModelSupportConditionInput | null,
};

export type Support = {
  __typename: "Support",
  id: string,
  user_id?: string | null,
  email: string,
  issue_type: string,
  subject: string,
  details?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateSupportInput = {
  id: string,
  user_id?: string | null,
  email?: string | null,
  issue_type?: string | null,
  subject?: string | null,
  details?: string | null,
};

export type DeleteSupportInput = {
  id: string,
};

export type CreateImagePostInput = {
  id?: string | null,
  user_id: string,
  gallery_id?: string | null,
  title: string,
  imageKey: string,
  description?: string | null,
  creator_model?: string | null,
  likesCount?: number | null,
  viewsCount?: number | null,
  isPrivate?: boolean | null,
  isCopyrighted?: boolean | null,
  isNSFW?: boolean | null,
  tags?: Array< string | null > | null,
  category?: string | null,
  createdAt?: string | null,
};

export type ModelImagePostConditionInput = {
  user_id?: ModelIDInput | null,
  gallery_id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  imageKey?: ModelStringInput | null,
  description?: ModelStringInput | null,
  creator_model?: ModelStringInput | null,
  likesCount?: ModelIntInput | null,
  viewsCount?: ModelIntInput | null,
  isPrivate?: ModelBooleanInput | null,
  isCopyrighted?: ModelBooleanInput | null,
  isNSFW?: ModelBooleanInput | null,
  tags?: ModelStringInput | null,
  category?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelImagePostConditionInput | null > | null,
  or?: Array< ModelImagePostConditionInput | null > | null,
  not?: ModelImagePostConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ImagePost = {
  __typename: "ImagePost",
  id: string,
  user_id: string,
  gallery_id?: string | null,
  title: string,
  imageKey: string,
  description?: string | null,
  creator_model?: string | null,
  likesCount?: number | null,
  viewsCount?: number | null,
  isPrivate?: boolean | null,
  isCopyrighted?: boolean | null,
  isNSFW?: boolean | null,
  tags?: Array< string | null > | null,
  category?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateImagePostInput = {
  id: string,
  user_id?: string | null,
  gallery_id?: string | null,
  title?: string | null,
  imageKey?: string | null,
  description?: string | null,
  creator_model?: string | null,
  likesCount?: number | null,
  viewsCount?: number | null,
  isPrivate?: boolean | null,
  isCopyrighted?: boolean | null,
  isNSFW?: boolean | null,
  tags?: Array< string | null > | null,
  category?: string | null,
  createdAt?: string | null,
};

export type DeleteImagePostInput = {
  id: string,
};

export type CreateUserInput = {
  id?: string | null,
  username: string,
  tagline?: string | null,
  likesCount?: number | null,
  reachCount?: number | null,
  isDisabled?: boolean | null,
  picture?: string | null,
  theme?: string | null,
  dob?: string | null,
  links?: Array< string | null > | null,
  communication_emails?: boolean | null,
  marketing_emails?: boolean | null,
  social_emails?: boolean | null,
  security_emails?: boolean | null,
};

export type ModelUserConditionInput = {
  username?: ModelStringInput | null,
  tagline?: ModelStringInput | null,
  likesCount?: ModelIntInput | null,
  reachCount?: ModelIntInput | null,
  isDisabled?: ModelBooleanInput | null,
  picture?: ModelStringInput | null,
  theme?: ModelStringInput | null,
  dob?: ModelStringInput | null,
  links?: ModelStringInput | null,
  communication_emails?: ModelBooleanInput | null,
  marketing_emails?: ModelBooleanInput | null,
  social_emails?: ModelBooleanInput | null,
  security_emails?: ModelBooleanInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type User = {
  __typename: "User",
  id: string,
  username: string,
  tagline?: string | null,
  likesCount?: number | null,
  reachCount?: number | null,
  isDisabled?: boolean | null,
  picture?: string | null,
  theme?: string | null,
  dob?: string | null,
  links?: Array< string | null > | null,
  communication_emails?: boolean | null,
  marketing_emails?: boolean | null,
  social_emails?: boolean | null,
  security_emails?: boolean | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateUserInput = {
  id: string,
  username?: string | null,
  tagline?: string | null,
  likesCount?: number | null,
  reachCount?: number | null,
  isDisabled?: boolean | null,
  picture?: string | null,
  theme?: string | null,
  dob?: string | null,
  links?: Array< string | null > | null,
  communication_emails?: boolean | null,
  marketing_emails?: boolean | null,
  social_emails?: boolean | null,
  security_emails?: boolean | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateGalleryInput = {
  id?: string | null,
  user_id: string,
  gallery_name: string,
  gallery_description?: string | null,
  isPrivate?: boolean | null,
  avatar?: string | null,
  post_counts?: number | null,
};

export type ModelGalleryConditionInput = {
  user_id?: ModelIDInput | null,
  gallery_name?: ModelStringInput | null,
  gallery_description?: ModelStringInput | null,
  isPrivate?: ModelBooleanInput | null,
  avatar?: ModelStringInput | null,
  post_counts?: ModelIntInput | null,
  and?: Array< ModelGalleryConditionInput | null > | null,
  or?: Array< ModelGalleryConditionInput | null > | null,
  not?: ModelGalleryConditionInput | null,
};

export type Gallery = {
  __typename: "Gallery",
  id: string,
  user_id: string,
  gallery_name: string,
  gallery_description?: string | null,
  isPrivate?: boolean | null,
  avatar?: string | null,
  post_counts?: number | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateGalleryInput = {
  id: string,
  user_id?: string | null,
  gallery_name?: string | null,
  gallery_description?: string | null,
  isPrivate?: boolean | null,
  avatar?: string | null,
  post_counts?: number | null,
};

export type DeleteGalleryInput = {
  id: string,
};

export type ModelSavedFilterInput = {
  id?: ModelIDInput | null,
  user_id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelSavedFilterInput | null > | null,
  or?: Array< ModelSavedFilterInput | null > | null,
  not?: ModelSavedFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSavedConnection = {
  __typename: "ModelSavedConnection",
  items:  Array<Saved | null >,
  nextToken?: string | null,
};

export type ModelLikedFilterInput = {
  id?: ModelIDInput | null,
  and?: Array< ModelLikedFilterInput | null > | null,
  or?: Array< ModelLikedFilterInput | null > | null,
  not?: ModelLikedFilterInput | null,
};

export type ModelLikedConnection = {
  __typename: "ModelLikedConnection",
  items:  Array<Liked | null >,
  nextToken?: string | null,
};

export type ModelSupportFilterInput = {
  id?: ModelIDInput | null,
  user_id?: ModelIDInput | null,
  email?: ModelStringInput | null,
  issue_type?: ModelStringInput | null,
  subject?: ModelStringInput | null,
  details?: ModelStringInput | null,
  and?: Array< ModelSupportFilterInput | null > | null,
  or?: Array< ModelSupportFilterInput | null > | null,
  not?: ModelSupportFilterInput | null,
};

export type ModelSupportConnection = {
  __typename: "ModelSupportConnection",
  items:  Array<Support | null >,
  nextToken?: string | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelImagePostFilterInput = {
  id?: ModelIDInput | null,
  user_id?: ModelIDInput | null,
  gallery_id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  imageKey?: ModelStringInput | null,
  description?: ModelStringInput | null,
  creator_model?: ModelStringInput | null,
  likesCount?: ModelIntInput | null,
  viewsCount?: ModelIntInput | null,
  isPrivate?: ModelBooleanInput | null,
  isCopyrighted?: ModelBooleanInput | null,
  isNSFW?: ModelBooleanInput | null,
  tags?: ModelStringInput | null,
  category?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelImagePostFilterInput | null > | null,
  or?: Array< ModelImagePostFilterInput | null > | null,
  not?: ModelImagePostFilterInput | null,
};

export type ModelImagePostConnection = {
  __typename: "ModelImagePostConnection",
  items:  Array<ImagePost | null >,
  nextToken?: string | null,
};

export type ModelIntKeyConditionInput = {
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type SearchableImagePostFilterInput = {
  id?: SearchableIDFilterInput | null,
  user_id?: SearchableIDFilterInput | null,
  gallery_id?: SearchableIDFilterInput | null,
  title?: SearchableStringFilterInput | null,
  imageKey?: SearchableStringFilterInput | null,
  description?: SearchableStringFilterInput | null,
  creator_model?: SearchableStringFilterInput | null,
  likesCount?: SearchableIntFilterInput | null,
  viewsCount?: SearchableIntFilterInput | null,
  isPrivate?: SearchableBooleanFilterInput | null,
  isCopyrighted?: SearchableBooleanFilterInput | null,
  isNSFW?: SearchableBooleanFilterInput | null,
  tags?: SearchableStringFilterInput | null,
  category?: SearchableStringFilterInput | null,
  createdAt?: SearchableStringFilterInput | null,
  updatedAt?: SearchableStringFilterInput | null,
  and?: Array< SearchableImagePostFilterInput | null > | null,
  or?: Array< SearchableImagePostFilterInput | null > | null,
  not?: SearchableImagePostFilterInput | null,
};

export type SearchableIDFilterInput = {
  ne?: string | null,
  gt?: string | null,
  lt?: string | null,
  gte?: string | null,
  lte?: string | null,
  eq?: string | null,
  match?: string | null,
  matchPhrase?: string | null,
  matchPhrasePrefix?: string | null,
  multiMatch?: string | null,
  exists?: boolean | null,
  wildcard?: string | null,
  regexp?: string | null,
  range?: Array< string | null > | null,
};

export type SearchableStringFilterInput = {
  ne?: string | null,
  gt?: string | null,
  lt?: string | null,
  gte?: string | null,
  lte?: string | null,
  eq?: string | null,
  match?: string | null,
  matchPhrase?: string | null,
  matchPhrasePrefix?: string | null,
  multiMatch?: string | null,
  exists?: boolean | null,
  wildcard?: string | null,
  regexp?: string | null,
  range?: Array< string | null > | null,
};

export type SearchableIntFilterInput = {
  ne?: number | null,
  gt?: number | null,
  lt?: number | null,
  gte?: number | null,
  lte?: number | null,
  eq?: number | null,
  range?: Array< number | null > | null,
};

export type SearchableBooleanFilterInput = {
  eq?: boolean | null,
  ne?: boolean | null,
};

export type SearchableImagePostSortInput = {
  field?: SearchableImagePostSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableImagePostSortableFields {
  id = "id",
  user_id = "user_id",
  gallery_id = "gallery_id",
  title = "title",
  imageKey = "imageKey",
  description = "description",
  creator_model = "creator_model",
  likesCount = "likesCount",
  viewsCount = "viewsCount",
  isPrivate = "isPrivate",
  isCopyrighted = "isCopyrighted",
  isNSFW = "isNSFW",
  tags = "tags",
  category = "category",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export enum SearchableSortDirection {
  asc = "asc",
  desc = "desc",
}


export type SearchableImagePostAggregationInput = {
  name: string,
  type: SearchableAggregateType,
  field: SearchableImagePostAggregateField,
};

export enum SearchableAggregateType {
  terms = "terms",
  avg = "avg",
  min = "min",
  max = "max",
  sum = "sum",
}


export enum SearchableImagePostAggregateField {
  id = "id",
  user_id = "user_id",
  gallery_id = "gallery_id",
  title = "title",
  imageKey = "imageKey",
  description = "description",
  creator_model = "creator_model",
  likesCount = "likesCount",
  viewsCount = "viewsCount",
  isPrivate = "isPrivate",
  isCopyrighted = "isCopyrighted",
  isNSFW = "isNSFW",
  tags = "tags",
  category = "category",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchableImagePostConnection = {
  __typename: "SearchableImagePostConnection",
  items:  Array<ImagePost | null >,
  nextToken?: string | null,
  total?: number | null,
  aggregateItems:  Array<SearchableAggregateResult | null >,
};

export type SearchableAggregateResult = {
  __typename: "SearchableAggregateResult",
  name: string,
  result?: SearchableAggregateGenericResult | null,
};

export type SearchableAggregateGenericResult = SearchableAggregateScalarResult | SearchableAggregateBucketResult


export type SearchableAggregateScalarResult = {
  __typename: "SearchableAggregateScalarResult",
  value: number,
};

export type SearchableAggregateBucketResult = {
  __typename: "SearchableAggregateBucketResult",
  buckets?:  Array<SearchableAggregateBucketResultItem | null > | null,
};

export type SearchableAggregateBucketResultItem = {
  __typename: "SearchableAggregateBucketResultItem",
  key: string,
  doc_count: number,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  username?: ModelStringInput | null,
  tagline?: ModelStringInput | null,
  likesCount?: ModelIntInput | null,
  reachCount?: ModelIntInput | null,
  isDisabled?: ModelBooleanInput | null,
  picture?: ModelStringInput | null,
  theme?: ModelStringInput | null,
  dob?: ModelStringInput | null,
  links?: ModelStringInput | null,
  communication_emails?: ModelBooleanInput | null,
  marketing_emails?: ModelBooleanInput | null,
  social_emails?: ModelBooleanInput | null,
  security_emails?: ModelBooleanInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelGalleryFilterInput = {
  id?: ModelIDInput | null,
  user_id?: ModelIDInput | null,
  gallery_name?: ModelStringInput | null,
  gallery_description?: ModelStringInput | null,
  isPrivate?: ModelBooleanInput | null,
  avatar?: ModelStringInput | null,
  post_counts?: ModelIntInput | null,
  and?: Array< ModelGalleryFilterInput | null > | null,
  or?: Array< ModelGalleryFilterInput | null > | null,
  not?: ModelGalleryFilterInput | null,
};

export type ModelGalleryConnection = {
  __typename: "ModelGalleryConnection",
  items:  Array<Gallery | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionSavedFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  user_id?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSavedFilterInput | null > | null,
  or?: Array< ModelSubscriptionSavedFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionLikedFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionLikedFilterInput | null > | null,
  or?: Array< ModelSubscriptionLikedFilterInput | null > | null,
};

export type ModelSubscriptionSupportFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  user_id?: ModelSubscriptionIDInput | null,
  email?: ModelSubscriptionStringInput | null,
  issue_type?: ModelSubscriptionStringInput | null,
  subject?: ModelSubscriptionStringInput | null,
  details?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSupportFilterInput | null > | null,
  or?: Array< ModelSubscriptionSupportFilterInput | null > | null,
};

export type ModelSubscriptionImagePostFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  gallery_id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  imageKey?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  creator_model?: ModelSubscriptionStringInput | null,
  likesCount?: ModelSubscriptionIntInput | null,
  viewsCount?: ModelSubscriptionIntInput | null,
  isPrivate?: ModelSubscriptionBooleanInput | null,
  isCopyrighted?: ModelSubscriptionBooleanInput | null,
  isNSFW?: ModelSubscriptionBooleanInput | null,
  tags?: ModelSubscriptionStringInput | null,
  category?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionImagePostFilterInput | null > | null,
  or?: Array< ModelSubscriptionImagePostFilterInput | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionUserFilterInput = {
  username?: ModelSubscriptionStringInput | null,
  tagline?: ModelSubscriptionStringInput | null,
  likesCount?: ModelSubscriptionIntInput | null,
  reachCount?: ModelSubscriptionIntInput | null,
  isDisabled?: ModelSubscriptionBooleanInput | null,
  picture?: ModelSubscriptionStringInput | null,
  theme?: ModelSubscriptionStringInput | null,
  dob?: ModelSubscriptionStringInput | null,
  links?: ModelSubscriptionStringInput | null,
  communication_emails?: ModelSubscriptionBooleanInput | null,
  marketing_emails?: ModelSubscriptionBooleanInput | null,
  social_emails?: ModelSubscriptionBooleanInput | null,
  security_emails?: ModelSubscriptionBooleanInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type ModelSubscriptionGalleryFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  gallery_name?: ModelSubscriptionStringInput | null,
  gallery_description?: ModelSubscriptionStringInput | null,
  isPrivate?: ModelSubscriptionBooleanInput | null,
  avatar?: ModelSubscriptionStringInput | null,
  post_counts?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionGalleryFilterInput | null > | null,
  or?: Array< ModelSubscriptionGalleryFilterInput | null > | null,
};

export type CreateSavedMutationVariables = {
  input: CreateSavedInput,
  condition?: ModelSavedConditionInput | null,
};

export type CreateSavedMutation = {
  createSaved?:  {
    __typename: "Saved",
    id: string,
    user_id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSavedMutationVariables = {
  input: UpdateSavedInput,
  condition?: ModelSavedConditionInput | null,
};

export type UpdateSavedMutation = {
  updateSaved?:  {
    __typename: "Saved",
    id: string,
    user_id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSavedMutationVariables = {
  input: DeleteSavedInput,
  condition?: ModelSavedConditionInput | null,
};

export type DeleteSavedMutation = {
  deleteSaved?:  {
    __typename: "Saved",
    id: string,
    user_id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateLikedMutationVariables = {
  input: CreateLikedInput,
  condition?: ModelLikedConditionInput | null,
};

export type CreateLikedMutation = {
  createLiked?:  {
    __typename: "Liked",
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateLikedMutationVariables = {
  input: UpdateLikedInput,
  condition?: ModelLikedConditionInput | null,
};

export type UpdateLikedMutation = {
  updateLiked?:  {
    __typename: "Liked",
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteLikedMutationVariables = {
  input: DeleteLikedInput,
  condition?: ModelLikedConditionInput | null,
};

export type DeleteLikedMutation = {
  deleteLiked?:  {
    __typename: "Liked",
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateSupportMutationVariables = {
  input: CreateSupportInput,
  condition?: ModelSupportConditionInput | null,
};

export type CreateSupportMutation = {
  createSupport?:  {
    __typename: "Support",
    id: string,
    user_id?: string | null,
    email: string,
    issue_type: string,
    subject: string,
    details?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSupportMutationVariables = {
  input: UpdateSupportInput,
  condition?: ModelSupportConditionInput | null,
};

export type UpdateSupportMutation = {
  updateSupport?:  {
    __typename: "Support",
    id: string,
    user_id?: string | null,
    email: string,
    issue_type: string,
    subject: string,
    details?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSupportMutationVariables = {
  input: DeleteSupportInput,
  condition?: ModelSupportConditionInput | null,
};

export type DeleteSupportMutation = {
  deleteSupport?:  {
    __typename: "Support",
    id: string,
    user_id?: string | null,
    email: string,
    issue_type: string,
    subject: string,
    details?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateImagePostMutationVariables = {
  input: CreateImagePostInput,
  condition?: ModelImagePostConditionInput | null,
};

export type CreateImagePostMutation = {
  createImagePost?:  {
    __typename: "ImagePost",
    id: string,
    user_id: string,
    gallery_id?: string | null,
    title: string,
    imageKey: string,
    description?: string | null,
    creator_model?: string | null,
    likesCount?: number | null,
    viewsCount?: number | null,
    isPrivate?: boolean | null,
    isCopyrighted?: boolean | null,
    isNSFW?: boolean | null,
    tags?: Array< string | null > | null,
    category?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateImagePostMutationVariables = {
  input: UpdateImagePostInput,
  condition?: ModelImagePostConditionInput | null,
};

export type UpdateImagePostMutation = {
  updateImagePost?:  {
    __typename: "ImagePost",
    id: string,
    user_id: string,
    gallery_id?: string | null,
    title: string,
    imageKey: string,
    description?: string | null,
    creator_model?: string | null,
    likesCount?: number | null,
    viewsCount?: number | null,
    isPrivate?: boolean | null,
    isCopyrighted?: boolean | null,
    isNSFW?: boolean | null,
    tags?: Array< string | null > | null,
    category?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteImagePostMutationVariables = {
  input: DeleteImagePostInput,
  condition?: ModelImagePostConditionInput | null,
};

export type DeleteImagePostMutation = {
  deleteImagePost?:  {
    __typename: "ImagePost",
    id: string,
    user_id: string,
    gallery_id?: string | null,
    title: string,
    imageKey: string,
    description?: string | null,
    creator_model?: string | null,
    likesCount?: number | null,
    viewsCount?: number | null,
    isPrivate?: boolean | null,
    isCopyrighted?: boolean | null,
    isNSFW?: boolean | null,
    tags?: Array< string | null > | null,
    category?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    username: string,
    tagline?: string | null,
    likesCount?: number | null,
    reachCount?: number | null,
    isDisabled?: boolean | null,
    picture?: string | null,
    theme?: string | null,
    dob?: string | null,
    links?: Array< string | null > | null,
    communication_emails?: boolean | null,
    marketing_emails?: boolean | null,
    social_emails?: boolean | null,
    security_emails?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    tagline?: string | null,
    likesCount?: number | null,
    reachCount?: number | null,
    isDisabled?: boolean | null,
    picture?: string | null,
    theme?: string | null,
    dob?: string | null,
    links?: Array< string | null > | null,
    communication_emails?: boolean | null,
    marketing_emails?: boolean | null,
    social_emails?: boolean | null,
    security_emails?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    username: string,
    tagline?: string | null,
    likesCount?: number | null,
    reachCount?: number | null,
    isDisabled?: boolean | null,
    picture?: string | null,
    theme?: string | null,
    dob?: string | null,
    links?: Array< string | null > | null,
    communication_emails?: boolean | null,
    marketing_emails?: boolean | null,
    social_emails?: boolean | null,
    security_emails?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateGalleryMutationVariables = {
  input: CreateGalleryInput,
  condition?: ModelGalleryConditionInput | null,
};

export type CreateGalleryMutation = {
  createGallery?:  {
    __typename: "Gallery",
    id: string,
    user_id: string,
    gallery_name: string,
    gallery_description?: string | null,
    isPrivate?: boolean | null,
    avatar?: string | null,
    post_counts?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateGalleryMutationVariables = {
  input: UpdateGalleryInput,
  condition?: ModelGalleryConditionInput | null,
};

export type UpdateGalleryMutation = {
  updateGallery?:  {
    __typename: "Gallery",
    id: string,
    user_id: string,
    gallery_name: string,
    gallery_description?: string | null,
    isPrivate?: boolean | null,
    avatar?: string | null,
    post_counts?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteGalleryMutationVariables = {
  input: DeleteGalleryInput,
  condition?: ModelGalleryConditionInput | null,
};

export type DeleteGalleryMutation = {
  deleteGallery?:  {
    __typename: "Gallery",
    id: string,
    user_id: string,
    gallery_name: string,
    gallery_description?: string | null,
    isPrivate?: boolean | null,
    avatar?: string | null,
    post_counts?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetSavedQueryVariables = {
  id: string,
};

export type GetSavedQuery = {
  getSaved?:  {
    __typename: "Saved",
    id: string,
    user_id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSavedsQueryVariables = {
  id?: string | null,
  filter?: ModelSavedFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListSavedsQuery = {
  listSaveds?:  {
    __typename: "ModelSavedConnection",
    items:  Array< {
      __typename: "Saved",
      id: string,
      user_id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetLikedQueryVariables = {
  id: string,
};

export type GetLikedQuery = {
  getLiked?:  {
    __typename: "Liked",
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListLikedsQueryVariables = {
  id?: string | null,
  filter?: ModelLikedFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListLikedsQuery = {
  listLikeds?:  {
    __typename: "ModelLikedConnection",
    items:  Array< {
      __typename: "Liked",
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSupportQueryVariables = {
  id: string,
};

export type GetSupportQuery = {
  getSupport?:  {
    __typename: "Support",
    id: string,
    user_id?: string | null,
    email: string,
    issue_type: string,
    subject: string,
    details?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSupportsQueryVariables = {
  id?: string | null,
  filter?: ModelSupportFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListSupportsQuery = {
  listSupports?:  {
    __typename: "ModelSupportConnection",
    items:  Array< {
      __typename: "Support",
      id: string,
      user_id?: string | null,
      email: string,
      issue_type: string,
      subject: string,
      details?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type SavedPostByDateQueryVariables = {
  user_id: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSavedFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type SavedPostByDateQuery = {
  savedPostByDate?:  {
    __typename: "ModelSavedConnection",
    items:  Array< {
      __typename: "Saved",
      id: string,
      user_id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetImagePostQueryVariables = {
  id: string,
};

export type GetImagePostQuery = {
  getImagePost?:  {
    __typename: "ImagePost",
    id: string,
    user_id: string,
    gallery_id?: string | null,
    title: string,
    imageKey: string,
    description?: string | null,
    creator_model?: string | null,
    likesCount?: number | null,
    viewsCount?: number | null,
    isPrivate?: boolean | null,
    isCopyrighted?: boolean | null,
    isNSFW?: boolean | null,
    tags?: Array< string | null > | null,
    category?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListImagePostsQueryVariables = {
  id?: string | null,
  filter?: ModelImagePostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListImagePostsQuery = {
  listImagePosts?:  {
    __typename: "ModelImagePostConnection",
    items:  Array< {
      __typename: "ImagePost",
      id: string,
      user_id: string,
      gallery_id?: string | null,
      title: string,
      imageKey: string,
      description?: string | null,
      creator_model?: string | null,
      likesCount?: number | null,
      viewsCount?: number | null,
      isPrivate?: boolean | null,
      isCopyrighted?: boolean | null,
      isNSFW?: boolean | null,
      tags?: Array< string | null > | null,
      category?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ProfilePostByDateQueryVariables = {
  user_id: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelImagePostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ProfilePostByDateQuery = {
  profilePostByDate?:  {
    __typename: "ModelImagePostConnection",
    items:  Array< {
      __typename: "ImagePost",
      id: string,
      user_id: string,
      gallery_id?: string | null,
      title: string,
      imageKey: string,
      description?: string | null,
      creator_model?: string | null,
      likesCount?: number | null,
      viewsCount?: number | null,
      isPrivate?: boolean | null,
      isCopyrighted?: boolean | null,
      isNSFW?: boolean | null,
      tags?: Array< string | null > | null,
      category?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ProfilePostByViewsQueryVariables = {
  user_id: string,
  viewsCount?: ModelIntKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelImagePostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ProfilePostByViewsQuery = {
  profilePostByViews?:  {
    __typename: "ModelImagePostConnection",
    items:  Array< {
      __typename: "ImagePost",
      id: string,
      user_id: string,
      gallery_id?: string | null,
      title: string,
      imageKey: string,
      description?: string | null,
      creator_model?: string | null,
      likesCount?: number | null,
      viewsCount?: number | null,
      isPrivate?: boolean | null,
      isCopyrighted?: boolean | null,
      isNSFW?: boolean | null,
      tags?: Array< string | null > | null,
      category?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GalleryPostByDateQueryVariables = {
  gallery_id: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelImagePostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GalleryPostByDateQuery = {
  galleryPostByDate?:  {
    __typename: "ModelImagePostConnection",
    items:  Array< {
      __typename: "ImagePost",
      id: string,
      user_id: string,
      gallery_id?: string | null,
      title: string,
      imageKey: string,
      description?: string | null,
      creator_model?: string | null,
      likesCount?: number | null,
      viewsCount?: number | null,
      isPrivate?: boolean | null,
      isCopyrighted?: boolean | null,
      isNSFW?: boolean | null,
      tags?: Array< string | null > | null,
      category?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type SearchImagePostsQueryVariables = {
  filter?: SearchableImagePostFilterInput | null,
  sort?: Array< SearchableImagePostSortInput | null > | null,
  limit?: number | null,
  nextToken?: string | null,
  from?: number | null,
  aggregates?: Array< SearchableImagePostAggregationInput | null > | null,
};

export type SearchImagePostsQuery = {
  searchImagePosts?:  {
    __typename: "SearchableImagePostConnection",
    items:  Array< {
      __typename: "ImagePost",
      id: string,
      user_id: string,
      gallery_id?: string | null,
      title: string,
      imageKey: string,
      description?: string | null,
      creator_model?: string | null,
      likesCount?: number | null,
      viewsCount?: number | null,
      isPrivate?: boolean | null,
      isCopyrighted?: boolean | null,
      isNSFW?: boolean | null,
      tags?: Array< string | null > | null,
      category?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    total?: number | null,
    aggregateItems:  Array< {
      __typename: "SearchableAggregateResult",
      name: string,
      result: ( {
          __typename: "SearchableAggregateScalarResult",
          value: number,
        } | {
          __typename: "SearchableAggregateBucketResult",
          buckets?:  Array< {
            __typename: string,
            key: string,
            doc_count: number,
          } | null > | null,
        }
      ) | null,
    } | null >,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    username: string,
    tagline?: string | null,
    likesCount?: number | null,
    reachCount?: number | null,
    isDisabled?: boolean | null,
    picture?: string | null,
    theme?: string | null,
    dob?: string | null,
    links?: Array< string | null > | null,
    communication_emails?: boolean | null,
    marketing_emails?: boolean | null,
    social_emails?: boolean | null,
    security_emails?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  id?: string | null,
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      username: string,
      tagline?: string | null,
      likesCount?: number | null,
      reachCount?: number | null,
      isDisabled?: boolean | null,
      picture?: string | null,
      theme?: string | null,
      dob?: string | null,
      links?: Array< string | null > | null,
      communication_emails?: boolean | null,
      marketing_emails?: boolean | null,
      social_emails?: boolean | null,
      security_emails?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetGalleryQueryVariables = {
  id: string,
};

export type GetGalleryQuery = {
  getGallery?:  {
    __typename: "Gallery",
    id: string,
    user_id: string,
    gallery_name: string,
    gallery_description?: string | null,
    isPrivate?: boolean | null,
    avatar?: string | null,
    post_counts?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListGalleriesQueryVariables = {
  id?: string | null,
  filter?: ModelGalleryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListGalleriesQuery = {
  listGalleries?:  {
    __typename: "ModelGalleryConnection",
    items:  Array< {
      __typename: "Gallery",
      id: string,
      user_id: string,
      gallery_name: string,
      gallery_description?: string | null,
      isPrivate?: boolean | null,
      avatar?: string | null,
      post_counts?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GalleriesByUser_idQueryVariables = {
  user_id: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelGalleryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GalleriesByUser_idQuery = {
  galleriesByUser_id?:  {
    __typename: "ModelGalleryConnection",
    items:  Array< {
      __typename: "Gallery",
      id: string,
      user_id: string,
      gallery_name: string,
      gallery_description?: string | null,
      isPrivate?: boolean | null,
      avatar?: string | null,
      post_counts?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateSavedSubscriptionVariables = {
  filter?: ModelSubscriptionSavedFilterInput | null,
};

export type OnCreateSavedSubscription = {
  onCreateSaved?:  {
    __typename: "Saved",
    id: string,
    user_id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSavedSubscriptionVariables = {
  filter?: ModelSubscriptionSavedFilterInput | null,
};

export type OnUpdateSavedSubscription = {
  onUpdateSaved?:  {
    __typename: "Saved",
    id: string,
    user_id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSavedSubscriptionVariables = {
  filter?: ModelSubscriptionSavedFilterInput | null,
};

export type OnDeleteSavedSubscription = {
  onDeleteSaved?:  {
    __typename: "Saved",
    id: string,
    user_id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateLikedSubscriptionVariables = {
  filter?: ModelSubscriptionLikedFilterInput | null,
};

export type OnCreateLikedSubscription = {
  onCreateLiked?:  {
    __typename: "Liked",
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateLikedSubscriptionVariables = {
  filter?: ModelSubscriptionLikedFilterInput | null,
};

export type OnUpdateLikedSubscription = {
  onUpdateLiked?:  {
    __typename: "Liked",
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteLikedSubscriptionVariables = {
  filter?: ModelSubscriptionLikedFilterInput | null,
};

export type OnDeleteLikedSubscription = {
  onDeleteLiked?:  {
    __typename: "Liked",
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateSupportSubscriptionVariables = {
  filter?: ModelSubscriptionSupportFilterInput | null,
};

export type OnCreateSupportSubscription = {
  onCreateSupport?:  {
    __typename: "Support",
    id: string,
    user_id?: string | null,
    email: string,
    issue_type: string,
    subject: string,
    details?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSupportSubscriptionVariables = {
  filter?: ModelSubscriptionSupportFilterInput | null,
};

export type OnUpdateSupportSubscription = {
  onUpdateSupport?:  {
    __typename: "Support",
    id: string,
    user_id?: string | null,
    email: string,
    issue_type: string,
    subject: string,
    details?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSupportSubscriptionVariables = {
  filter?: ModelSubscriptionSupportFilterInput | null,
};

export type OnDeleteSupportSubscription = {
  onDeleteSupport?:  {
    __typename: "Support",
    id: string,
    user_id?: string | null,
    email: string,
    issue_type: string,
    subject: string,
    details?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateImagePostSubscriptionVariables = {
  filter?: ModelSubscriptionImagePostFilterInput | null,
  user_id?: string | null,
};

export type OnCreateImagePostSubscription = {
  onCreateImagePost?:  {
    __typename: "ImagePost",
    id: string,
    user_id: string,
    gallery_id?: string | null,
    title: string,
    imageKey: string,
    description?: string | null,
    creator_model?: string | null,
    likesCount?: number | null,
    viewsCount?: number | null,
    isPrivate?: boolean | null,
    isCopyrighted?: boolean | null,
    isNSFW?: boolean | null,
    tags?: Array< string | null > | null,
    category?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateImagePostSubscriptionVariables = {
  filter?: ModelSubscriptionImagePostFilterInput | null,
  user_id?: string | null,
};

export type OnUpdateImagePostSubscription = {
  onUpdateImagePost?:  {
    __typename: "ImagePost",
    id: string,
    user_id: string,
    gallery_id?: string | null,
    title: string,
    imageKey: string,
    description?: string | null,
    creator_model?: string | null,
    likesCount?: number | null,
    viewsCount?: number | null,
    isPrivate?: boolean | null,
    isCopyrighted?: boolean | null,
    isNSFW?: boolean | null,
    tags?: Array< string | null > | null,
    category?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteImagePostSubscriptionVariables = {
  filter?: ModelSubscriptionImagePostFilterInput | null,
  user_id?: string | null,
};

export type OnDeleteImagePostSubscription = {
  onDeleteImagePost?:  {
    __typename: "ImagePost",
    id: string,
    user_id: string,
    gallery_id?: string | null,
    title: string,
    imageKey: string,
    description?: string | null,
    creator_model?: string | null,
    likesCount?: number | null,
    viewsCount?: number | null,
    isPrivate?: boolean | null,
    isCopyrighted?: boolean | null,
    isNSFW?: boolean | null,
    tags?: Array< string | null > | null,
    category?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  id?: string | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    tagline?: string | null,
    likesCount?: number | null,
    reachCount?: number | null,
    isDisabled?: boolean | null,
    picture?: string | null,
    theme?: string | null,
    dob?: string | null,
    links?: Array< string | null > | null,
    communication_emails?: boolean | null,
    marketing_emails?: boolean | null,
    social_emails?: boolean | null,
    security_emails?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  id?: string | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    tagline?: string | null,
    likesCount?: number | null,
    reachCount?: number | null,
    isDisabled?: boolean | null,
    picture?: string | null,
    theme?: string | null,
    dob?: string | null,
    links?: Array< string | null > | null,
    communication_emails?: boolean | null,
    marketing_emails?: boolean | null,
    social_emails?: boolean | null,
    security_emails?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  id?: string | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    username: string,
    tagline?: string | null,
    likesCount?: number | null,
    reachCount?: number | null,
    isDisabled?: boolean | null,
    picture?: string | null,
    theme?: string | null,
    dob?: string | null,
    links?: Array< string | null > | null,
    communication_emails?: boolean | null,
    marketing_emails?: boolean | null,
    social_emails?: boolean | null,
    security_emails?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateGallerySubscriptionVariables = {
  filter?: ModelSubscriptionGalleryFilterInput | null,
  user_id?: string | null,
};

export type OnCreateGallerySubscription = {
  onCreateGallery?:  {
    __typename: "Gallery",
    id: string,
    user_id: string,
    gallery_name: string,
    gallery_description?: string | null,
    isPrivate?: boolean | null,
    avatar?: string | null,
    post_counts?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateGallerySubscriptionVariables = {
  filter?: ModelSubscriptionGalleryFilterInput | null,
  user_id?: string | null,
};

export type OnUpdateGallerySubscription = {
  onUpdateGallery?:  {
    __typename: "Gallery",
    id: string,
    user_id: string,
    gallery_name: string,
    gallery_description?: string | null,
    isPrivate?: boolean | null,
    avatar?: string | null,
    post_counts?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteGallerySubscriptionVariables = {
  filter?: ModelSubscriptionGalleryFilterInput | null,
  user_id?: string | null,
};

export type OnDeleteGallerySubscription = {
  onDeleteGallery?:  {
    __typename: "Gallery",
    id: string,
    user_id: string,
    gallery_name: string,
    gallery_description?: string | null,
    isPrivate?: boolean | null,
    avatar?: string | null,
    post_counts?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
