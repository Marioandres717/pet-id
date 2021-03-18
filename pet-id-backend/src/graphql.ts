/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export enum Addresses_constraint {
  Addresses_pkey = 'Addresses_pkey',
  Addresses_userId_key = 'Addresses_userId_key',
}

export enum Addresses_select_column {
  city = 'city',
  country = 'country',
  id = 'id',
  line_1 = 'line_1',
  other_Address_details = 'other_Address_details',
  phone = 'phone',
  province_or_state = 'province_or_state',
  userId = 'userId',
  zip_or_postcode = 'zip_or_postcode',
}

export enum Addresses_update_column {
  city = 'city',
  country = 'country',
  id = 'id',
  line_1 = 'line_1',
  other_Address_details = 'other_Address_details',
  phone = 'phone',
  province_or_state = 'province_or_state',
  userId = 'userId',
  zip_or_postcode = 'zip_or_postcode',
}

export enum Images_constraint {
  Images_pkey = 'Images_pkey',
}

export enum Images_select_column {
  id = 'id',
  large_image_url = 'large_image_url',
  url = 'url',
}

export enum Images_update_column {
  id = 'id',
  large_image_url = 'large_image_url',
  url = 'url',
}

export enum order_by {
  asc = 'asc',
  asc_nulls_first = 'asc_nulls_first',
  asc_nulls_last = 'asc_nulls_last',
  desc = 'desc',
  desc_nulls_first = 'desc_nulls_first',
  desc_nulls_last = 'desc_nulls_last',
}

export enum Pet_species_constraint {
  Pet_species_pkey = 'Pet_species_pkey',
  Pet_species_type_key = 'Pet_species_type_key',
}

export enum Pet_species_select_column {
  id = 'id',
  type = 'type',
}

export enum Pet_species_update_column {
  id = 'id',
  type = 'type',
}

export enum Pets_constraint {
  Pets_id_key = 'Pets_id_key',
  Pets_pkey = 'Pets_pkey',
}

export enum Pets_select_column {
  avatarId = 'avatarId',
  description = 'description',
  id = 'id',
  name = 'name',
  species = 'species',
  uuid = 'uuid',
}

export enum Pets_update_column {
  avatarId = 'avatarId',
  description = 'description',
  id = 'id',
  name = 'name',
  species = 'species',
  uuid = 'uuid',
}

export enum User_browsers_constraint {
  User_browsers_pkey = 'User_browsers_pkey',
  User_browsers_user_id_key = 'User_browsers_user_id_key',
}

export enum User_browsers_select_column {
  browser_subscription_object = 'browser_subscription_object',
  id = 'id',
  user_id = 'user_id',
}

export enum User_browsers_update_column {
  browser_subscription_object = 'browser_subscription_object',
  id = 'id',
  user_id = 'user_id',
}

export enum User_Pets_constraint {
  User_Pets_pkey = 'User_Pets_pkey',
}

export enum User_Pets_select_column {
  id = 'id',
  petId = 'petId',
  userId = 'userId',
}

export enum User_Pets_update_column {
  id = 'id',
  petId = 'petId',
  userId = 'userId',
}

export enum users_constraint {
  users_AddressId_key = 'users_AddressId_key',
  users_authId_key = 'users_authId_key',
  users_email_key = 'users_email_key',
  users_id_key = 'users_id_key',
  users_pkey = 'users_pkey',
}

export enum users_select_column {
  AddressId = 'AddressId',
  authId = 'authId',
  avatarId = 'avatarId',
  email = 'email',
  id = 'id',
  name = 'name',
}

export enum users_update_column {
  AddressId = 'AddressId',
  authId = 'authId',
  avatarId = 'avatarId',
  email = 'email',
  id = 'id',
  name = 'name',
}

export interface Addresses_aggregate_order_by {
  avg?: Addresses_avg_order_by;
  count?: order_by;
  max?: Addresses_max_order_by;
  min?: Addresses_min_order_by;
  stddev?: Addresses_stddev_order_by;
  stddev_pop?: Addresses_stddev_pop_order_by;
  stddev_samp?: Addresses_stddev_samp_order_by;
  sum?: Addresses_sum_order_by;
  var_pop?: Addresses_var_pop_order_by;
  var_samp?: Addresses_var_samp_order_by;
  variance?: Addresses_variance_order_by;
}

export interface Addresses_arr_rel_insert_input {
  data: Addresses_insert_input[];
  on_conflict?: Addresses_on_conflict;
}

export interface Addresses_avg_order_by {
  id?: order_by;
  userId?: order_by;
}

export interface Addresses_bool_exp {
  _and?: Addresses_bool_exp[];
  _not?: Addresses_bool_exp;
  _or?: Addresses_bool_exp[];
  city?: String_comparison_exp;
  country?: String_comparison_exp;
  id?: Int_comparison_exp;
  line_1?: String_comparison_exp;
  other_Address_details?: String_comparison_exp;
  phone?: String_comparison_exp;
  province_or_state?: String_comparison_exp;
  user?: Users_bool_exp;
  userById?: Users_bool_exp;
  userId?: Int_comparison_exp;
  zip_or_postcode?: String_comparison_exp;
}

export interface Addresses_inc_input {
  id?: number;
  userId?: number;
}

export interface Addresses_insert_input {
  city?: string;
  country?: string;
  id?: number;
  line_1?: string;
  other_Address_details?: string;
  phone?: string;
  province_or_state?: string;
  user?: Users_obj_rel_insert_input;
  userById?: Users_obj_rel_insert_input;
  userId?: number;
  zip_or_postcode?: string;
}

export interface Addresses_max_order_by {
  city?: order_by;
  country?: order_by;
  id?: order_by;
  line_1?: order_by;
  other_Address_details?: order_by;
  phone?: order_by;
  province_or_state?: order_by;
  userId?: order_by;
  zip_or_postcode?: order_by;
}

export interface Addresses_min_order_by {
  city?: order_by;
  country?: order_by;
  id?: order_by;
  line_1?: order_by;
  other_Address_details?: order_by;
  phone?: order_by;
  province_or_state?: order_by;
  userId?: order_by;
  zip_or_postcode?: order_by;
}

export interface Addresses_obj_rel_insert_input {
  data: Addresses_insert_input;
  on_conflict?: Addresses_on_conflict;
}

export interface Addresses_on_conflict {
  constraint: Addresses_constraint;
  update_columns: Addresses_update_column[];
  where?: Addresses_bool_exp;
}

export interface Addresses_order_by {
  city?: order_by;
  country?: order_by;
  id?: order_by;
  line_1?: order_by;
  other_Address_details?: order_by;
  phone?: order_by;
  province_or_state?: order_by;
  user?: Users_order_by;
  userById?: Users_order_by;
  userId?: order_by;
  zip_or_postcode?: order_by;
}

export interface Addresses_pk_columns_input {
  id: number;
}

export interface Addresses_set_input {
  city?: string;
  country?: string;
  id?: number;
  line_1?: string;
  other_Address_details?: string;
  phone?: string;
  province_or_state?: string;
  userId?: number;
  zip_or_postcode?: string;
}

export interface Addresses_stddev_order_by {
  id?: order_by;
  userId?: order_by;
}

export interface Addresses_stddev_pop_order_by {
  id?: order_by;
  userId?: order_by;
}

export interface Addresses_stddev_samp_order_by {
  id?: order_by;
  userId?: order_by;
}

export interface Addresses_sum_order_by {
  id?: order_by;
  userId?: order_by;
}

export interface Addresses_var_pop_order_by {
  id?: order_by;
  userId?: order_by;
}

export interface Addresses_var_samp_order_by {
  id?: order_by;
  userId?: order_by;
}

export interface Addresses_variance_order_by {
  id?: order_by;
  userId?: order_by;
}

export interface Images_aggregate_order_by {
  avg?: Images_avg_order_by;
  count?: order_by;
  max?: Images_max_order_by;
  min?: Images_min_order_by;
  stddev?: Images_stddev_order_by;
  stddev_pop?: Images_stddev_pop_order_by;
  stddev_samp?: Images_stddev_samp_order_by;
  sum?: Images_sum_order_by;
  var_pop?: Images_var_pop_order_by;
  var_samp?: Images_var_samp_order_by;
  variance?: Images_variance_order_by;
}

export interface Images_arr_rel_insert_input {
  data: Images_insert_input[];
  on_conflict?: Images_on_conflict;
}

export interface Images_avg_order_by {
  id?: order_by;
}

export interface Images_bool_exp {
  _and?: Images_bool_exp[];
  _not?: Images_bool_exp;
  _or?: Images_bool_exp[];
  id?: Int_comparison_exp;
  large_image_url?: String_comparison_exp;
  pets?: Pets_bool_exp;
  url?: String_comparison_exp;
  users?: Users_bool_exp;
}

export interface Images_inc_input {
  id?: number;
}

export interface Images_insert_input {
  id?: number;
  large_image_url?: string;
  pets?: Pets_arr_rel_insert_input;
  url?: string;
  users?: Users_arr_rel_insert_input;
}

export interface Images_max_order_by {
  id?: order_by;
  large_image_url?: order_by;
  url?: order_by;
}

export interface Images_min_order_by {
  id?: order_by;
  large_image_url?: order_by;
  url?: order_by;
}

export interface Images_obj_rel_insert_input {
  data: Images_insert_input;
  on_conflict?: Images_on_conflict;
}

export interface Images_on_conflict {
  constraint: Images_constraint;
  update_columns: Images_update_column[];
  where?: Images_bool_exp;
}

export interface Images_order_by {
  id?: order_by;
  large_image_url?: order_by;
  Pets_aggregate?: Pets_aggregate_order_by;
  url?: order_by;
  users_aggregate?: Users_aggregate_order_by;
}

export interface Images_pk_columns_input {
  id: number;
}

export interface Images_set_input {
  id?: number;
  large_image_url?: string;
  url?: string;
}

export interface Images_stddev_order_by {
  id?: order_by;
}

export interface Images_stddev_pop_order_by {
  id?: order_by;
}

export interface Images_stddev_samp_order_by {
  id?: order_by;
}

export interface Images_sum_order_by {
  id?: order_by;
}

export interface Images_var_pop_order_by {
  id?: order_by;
}

export interface Images_var_samp_order_by {
  id?: order_by;
}

export interface Images_variance_order_by {
  id?: order_by;
}

export interface Int_comparison_exp {
  _eq?: number;
  _gt?: number;
  _gte?: number;
  _in?: number[];
  _is_null?: boolean;
  _lt?: number;
  _lte?: number;
  _neq?: number;
  _nin?: number[];
}

export interface Json_comparison_exp {
  _eq?: json;
  _gt?: json;
  _gte?: json;
  _in?: json[];
  _is_null?: boolean;
  _lt?: json;
  _lte?: json;
  _neq?: json;
  _nin?: json[];
}

export interface Pet_species_aggregate_order_by {
  avg?: Pet_species_avg_order_by;
  count?: order_by;
  max?: Pet_species_max_order_by;
  min?: Pet_species_min_order_by;
  stddev?: Pet_species_stddev_order_by;
  stddev_pop?: Pet_species_stddev_pop_order_by;
  stddev_samp?: Pet_species_stddev_samp_order_by;
  sum?: Pet_species_sum_order_by;
  var_pop?: Pet_species_var_pop_order_by;
  var_samp?: Pet_species_var_samp_order_by;
  variance?: Pet_species_variance_order_by;
}

export interface Pet_species_arr_rel_insert_input {
  data: Pet_species_insert_input[];
  on_conflict?: Pet_species_on_conflict;
}

export interface Pet_species_avg_order_by {
  id?: order_by;
}

export interface Pet_species_bool_exp {
  _and?: Pet_species_bool_exp[];
  _not?: Pet_species_bool_exp;
  _or?: Pet_species_bool_exp[];
  id?: Int_comparison_exp;
  pets?: Pets_bool_exp;
  type?: String_comparison_exp;
}

export interface Pet_species_inc_input {
  id?: number;
}

export interface Pet_species_insert_input {
  id?: number;
  pets?: Pets_arr_rel_insert_input;
  type?: string;
}

export interface Pet_species_max_order_by {
  id?: order_by;
  type?: order_by;
}

export interface Pet_species_min_order_by {
  id?: order_by;
  type?: order_by;
}

export interface Pet_species_obj_rel_insert_input {
  data: Pet_species_insert_input;
  on_conflict?: Pet_species_on_conflict;
}

export interface Pet_species_on_conflict {
  constraint: Pet_species_constraint;
  update_columns: Pet_species_update_column[];
  where?: Pet_species_bool_exp;
}

export interface Pet_species_order_by {
  id?: order_by;
  Pets_aggregate?: Pets_aggregate_order_by;
  type?: order_by;
}

export interface Pet_species_pk_columns_input {
  id: number;
}

export interface Pet_species_set_input {
  id?: number;
  type?: string;
}

export interface Pet_species_stddev_order_by {
  id?: order_by;
}

export interface Pet_species_stddev_pop_order_by {
  id?: order_by;
}

export interface Pet_species_stddev_samp_order_by {
  id?: order_by;
}

export interface Pet_species_sum_order_by {
  id?: order_by;
}

export interface Pet_species_var_pop_order_by {
  id?: order_by;
}

export interface Pet_species_var_samp_order_by {
  id?: order_by;
}

export interface Pet_species_variance_order_by {
  id?: order_by;
}

export interface Pets_aggregate_order_by {
  avg?: Pets_avg_order_by;
  count?: order_by;
  max?: Pets_max_order_by;
  min?: Pets_min_order_by;
  stddev?: Pets_stddev_order_by;
  stddev_pop?: Pets_stddev_pop_order_by;
  stddev_samp?: Pets_stddev_samp_order_by;
  sum?: Pets_sum_order_by;
  var_pop?: Pets_var_pop_order_by;
  var_samp?: Pets_var_samp_order_by;
  variance?: Pets_variance_order_by;
}

export interface Pets_arr_rel_insert_input {
  data: Pets_insert_input[];
  on_conflict?: Pets_on_conflict;
}

export interface Pets_avg_order_by {
  avatarId?: order_by;
  id?: order_by;
  species?: order_by;
}

export interface Pets_bool_exp {
  _and?: Pets_bool_exp[];
  _not?: Pets_bool_exp;
  _or?: Pets_bool_exp[];
  avatar?: Images_bool_exp;
  avatarId?: Int_comparison_exp;
  description?: String_comparison_exp;
  id?: Int_comparison_exp;
  name?: String_comparison_exp;
  pet_species?: Pet_species_bool_exp;
  species?: Int_comparison_exp;
  user_pets?: User_Pets_bool_exp;
  uuid?: Uuid_comparison_exp;
}

export interface Pets_inc_input {
  avatarId?: number;
  id?: number;
  species?: number;
}

export interface Pets_insert_input {
  avatar?: Images_obj_rel_insert_input;
  avatarId?: number;
  description?: string;
  id?: number;
  name?: string;
  pet_species?: Pet_species_obj_rel_insert_input;
  species?: number;
  user_pets?: User_Pets_arr_rel_insert_input;
  uuid?: uuid;
}

export interface Pets_max_order_by {
  avatarId?: order_by;
  description?: order_by;
  id?: order_by;
  name?: order_by;
  species?: order_by;
  uuid?: order_by;
}

export interface Pets_min_order_by {
  avatarId?: order_by;
  description?: order_by;
  id?: order_by;
  name?: order_by;
  species?: order_by;
  uuid?: order_by;
}

export interface Pets_obj_rel_insert_input {
  data: Pets_insert_input;
  on_conflict?: Pets_on_conflict;
}

export interface Pets_on_conflict {
  constraint: Pets_constraint;
  update_columns: Pets_update_column[];
  where?: Pets_bool_exp;
}

export interface Pets_order_by {
  avatar?: Images_order_by;
  avatarId?: order_by;
  description?: order_by;
  id?: order_by;
  name?: order_by;
  pet_species?: Pet_species_order_by;
  species?: order_by;
  User_Pets_aggregate?: User_Pets_aggregate_order_by;
  uuid?: order_by;
}

export interface Pets_pk_columns_input {
  id: number;
}

export interface Pets_set_input {
  avatarId?: number;
  description?: string;
  id?: number;
  name?: string;
  species?: number;
  uuid?: uuid;
}

export interface Pets_stddev_order_by {
  avatarId?: order_by;
  id?: order_by;
  species?: order_by;
}

export interface Pets_stddev_pop_order_by {
  avatarId?: order_by;
  id?: order_by;
  species?: order_by;
}

export interface Pets_stddev_samp_order_by {
  avatarId?: order_by;
  id?: order_by;
  species?: order_by;
}

export interface Pets_sum_order_by {
  avatarId?: order_by;
  id?: order_by;
  species?: order_by;
}

export interface Pets_var_pop_order_by {
  avatarId?: order_by;
  id?: order_by;
  species?: order_by;
}

export interface Pets_var_samp_order_by {
  avatarId?: order_by;
  id?: order_by;
  species?: order_by;
}

export interface Pets_variance_order_by {
  avatarId?: order_by;
  id?: order_by;
  species?: order_by;
}

export interface String_comparison_exp {
  _eq?: string;
  _gt?: string;
  _gte?: string;
  _ilike?: string;
  _in?: string[];
  _is_null?: boolean;
  _like?: string;
  _lt?: string;
  _lte?: string;
  _neq?: string;
  _nilike?: string;
  _nin?: string[];
  _nlike?: string;
  _nsimilar?: string;
  _similar?: string;
}

export interface User_browsers_aggregate_order_by {
  avg?: User_browsers_avg_order_by;
  count?: order_by;
  max?: User_browsers_max_order_by;
  min?: User_browsers_min_order_by;
  stddev?: User_browsers_stddev_order_by;
  stddev_pop?: User_browsers_stddev_pop_order_by;
  stddev_samp?: User_browsers_stddev_samp_order_by;
  sum?: User_browsers_sum_order_by;
  var_pop?: User_browsers_var_pop_order_by;
  var_samp?: User_browsers_var_samp_order_by;
  variance?: User_browsers_variance_order_by;
}

export interface User_browsers_arr_rel_insert_input {
  data: User_browsers_insert_input[];
  on_conflict?: User_browsers_on_conflict;
}

export interface User_browsers_avg_order_by {
  id?: order_by;
  user_id?: order_by;
}

export interface User_browsers_bool_exp {
  _and?: User_browsers_bool_exp[];
  _not?: User_browsers_bool_exp;
  _or?: User_browsers_bool_exp[];
  browser_subscription_object?: Json_comparison_exp;
  id?: Int_comparison_exp;
  user?: Users_bool_exp;
  user_id?: Int_comparison_exp;
}

export interface User_browsers_inc_input {
  id?: number;
  user_id?: number;
}

export interface User_browsers_insert_input {
  browser_subscription_object?: json;
  id?: number;
  user?: Users_obj_rel_insert_input;
  user_id?: number;
}

export interface User_browsers_max_order_by {
  id?: order_by;
  user_id?: order_by;
}

export interface User_browsers_min_order_by {
  id?: order_by;
  user_id?: order_by;
}

export interface User_browsers_obj_rel_insert_input {
  data: User_browsers_insert_input;
  on_conflict?: User_browsers_on_conflict;
}

export interface User_browsers_on_conflict {
  constraint: User_browsers_constraint;
  update_columns: User_browsers_update_column[];
  where?: User_browsers_bool_exp;
}

export interface User_browsers_order_by {
  browser_subscription_object?: order_by;
  id?: order_by;
  user?: Users_order_by;
  user_id?: order_by;
}

export interface User_browsers_pk_columns_input {
  id: number;
}

export interface User_browsers_set_input {
  browser_subscription_object?: json;
  id?: number;
  user_id?: number;
}

export interface User_browsers_stddev_order_by {
  id?: order_by;
  user_id?: order_by;
}

export interface User_browsers_stddev_pop_order_by {
  id?: order_by;
  user_id?: order_by;
}

export interface User_browsers_stddev_samp_order_by {
  id?: order_by;
  user_id?: order_by;
}

export interface User_browsers_sum_order_by {
  id?: order_by;
  user_id?: order_by;
}

export interface User_browsers_var_pop_order_by {
  id?: order_by;
  user_id?: order_by;
}

export interface User_browsers_var_samp_order_by {
  id?: order_by;
  user_id?: order_by;
}

export interface User_browsers_variance_order_by {
  id?: order_by;
  user_id?: order_by;
}

export interface User_Pets_aggregate_order_by {
  avg?: User_Pets_avg_order_by;
  count?: order_by;
  max?: User_Pets_max_order_by;
  min?: User_Pets_min_order_by;
  stddev?: User_Pets_stddev_order_by;
  stddev_pop?: User_Pets_stddev_pop_order_by;
  stddev_samp?: User_Pets_stddev_samp_order_by;
  sum?: User_Pets_sum_order_by;
  var_pop?: User_Pets_var_pop_order_by;
  var_samp?: User_Pets_var_samp_order_by;
  variance?: User_Pets_variance_order_by;
}

export interface User_Pets_arr_rel_insert_input {
  data: User_Pets_insert_input[];
  on_conflict?: User_Pets_on_conflict;
}

export interface User_Pets_avg_order_by {
  id?: order_by;
  petId?: order_by;
  userId?: order_by;
}

export interface User_Pets_bool_exp {
  _and?: User_Pets_bool_exp[];
  _not?: User_Pets_bool_exp;
  _or?: User_Pets_bool_exp[];
  id?: Int_comparison_exp;
  pet?: Pets_bool_exp;
  petId?: Int_comparison_exp;
  user?: Users_bool_exp;
  userId?: Int_comparison_exp;
}

export interface User_Pets_inc_input {
  id?: number;
  petId?: number;
  userId?: number;
}

export interface User_Pets_insert_input {
  id?: number;
  pet?: Pets_obj_rel_insert_input;
  petId?: number;
  user?: Users_obj_rel_insert_input;
  userId?: number;
}

export interface User_Pets_max_order_by {
  id?: order_by;
  petId?: order_by;
  userId?: order_by;
}

export interface User_Pets_min_order_by {
  id?: order_by;
  petId?: order_by;
  userId?: order_by;
}

export interface User_Pets_obj_rel_insert_input {
  data: User_Pets_insert_input;
  on_conflict?: User_Pets_on_conflict;
}

export interface User_Pets_on_conflict {
  constraint: User_Pets_constraint;
  update_columns: User_Pets_update_column[];
  where?: User_Pets_bool_exp;
}

export interface User_Pets_order_by {
  id?: order_by;
  pet?: Pets_order_by;
  petId?: order_by;
  user?: Users_order_by;
  userId?: order_by;
}

export interface User_Pets_pk_columns_input {
  id: number;
}

export interface User_Pets_set_input {
  id?: number;
  petId?: number;
  userId?: number;
}

export interface User_Pets_stddev_order_by {
  id?: order_by;
  petId?: order_by;
  userId?: order_by;
}

export interface User_Pets_stddev_pop_order_by {
  id?: order_by;
  petId?: order_by;
  userId?: order_by;
}

export interface User_Pets_stddev_samp_order_by {
  id?: order_by;
  petId?: order_by;
  userId?: order_by;
}

export interface User_Pets_sum_order_by {
  id?: order_by;
  petId?: order_by;
  userId?: order_by;
}

export interface User_Pets_var_pop_order_by {
  id?: order_by;
  petId?: order_by;
  userId?: order_by;
}

export interface User_Pets_var_samp_order_by {
  id?: order_by;
  petId?: order_by;
  userId?: order_by;
}

export interface User_Pets_variance_order_by {
  id?: order_by;
  petId?: order_by;
  userId?: order_by;
}

export interface Users_aggregate_order_by {
  avg?: Users_avg_order_by;
  count?: order_by;
  max?: Users_max_order_by;
  min?: Users_min_order_by;
  stddev?: Users_stddev_order_by;
  stddev_pop?: Users_stddev_pop_order_by;
  stddev_samp?: Users_stddev_samp_order_by;
  sum?: Users_sum_order_by;
  var_pop?: Users_var_pop_order_by;
  var_samp?: Users_var_samp_order_by;
  variance?: Users_variance_order_by;
}

export interface Users_arr_rel_insert_input {
  data: Users_insert_input[];
  on_conflict?: Users_on_conflict;
}

export interface Users_avg_order_by {
  AddressId?: order_by;
  avatarId?: order_by;
  id?: order_by;
}

export interface Users_bool_exp {
  _and?: Users_bool_exp[];
  _not?: Users_bool_exp;
  _or?: Users_bool_exp[];
  Address?: Addresses_bool_exp;
  AddressId?: Int_comparison_exp;
  authId?: String_comparison_exp;
  avatar?: Images_bool_exp;
  avatarId?: Int_comparison_exp;
  email?: String_comparison_exp;
  id?: Int_comparison_exp;
  name?: String_comparison_exp;
  user_browser?: User_browsers_bool_exp;
  user_pets?: User_Pets_bool_exp;
}

export interface Users_inc_input {
  AddressId?: number;
  avatarId?: number;
  id?: number;
}

export interface Users_insert_input {
  Address?: Addresses_obj_rel_insert_input;
  AddressId?: number;
  authId?: string;
  avatar?: Images_obj_rel_insert_input;
  avatarId?: number;
  email?: string;
  id?: number;
  name?: string;
  user_browser?: User_browsers_obj_rel_insert_input;
  user_pets?: User_Pets_arr_rel_insert_input;
}

export interface Users_max_order_by {
  AddressId?: order_by;
  authId?: order_by;
  avatarId?: order_by;
  email?: order_by;
  id?: order_by;
  name?: order_by;
}

export interface Users_min_order_by {
  AddressId?: order_by;
  authId?: order_by;
  avatarId?: order_by;
  email?: order_by;
  id?: order_by;
  name?: order_by;
}

export interface Users_obj_rel_insert_input {
  data: Users_insert_input;
  on_conflict?: Users_on_conflict;
}

export interface Users_on_conflict {
  constraint: users_constraint;
  update_columns: users_update_column[];
  where?: Users_bool_exp;
}

export interface Users_order_by {
  Address?: Addresses_order_by;
  AddressId?: order_by;
  authId?: order_by;
  avatar?: Images_order_by;
  avatarId?: order_by;
  email?: order_by;
  id?: order_by;
  name?: order_by;
  user_browser?: User_browsers_order_by;
  User_Pets_aggregate?: User_Pets_aggregate_order_by;
}

export interface Users_pk_columns_input {
  id: number;
}

export interface Users_set_input {
  AddressId?: number;
  authId?: string;
  avatarId?: number;
  email?: string;
  id?: number;
  name?: string;
}

export interface Users_stddev_order_by {
  AddressId?: order_by;
  avatarId?: order_by;
  id?: order_by;
}

export interface Users_stddev_pop_order_by {
  AddressId?: order_by;
  avatarId?: order_by;
  id?: order_by;
}

export interface Users_stddev_samp_order_by {
  AddressId?: order_by;
  avatarId?: order_by;
  id?: order_by;
}

export interface Users_sum_order_by {
  AddressId?: order_by;
  avatarId?: order_by;
  id?: order_by;
}

export interface Users_var_pop_order_by {
  AddressId?: order_by;
  avatarId?: order_by;
  id?: order_by;
}

export interface Users_var_samp_order_by {
  AddressId?: order_by;
  avatarId?: order_by;
  id?: order_by;
}

export interface Users_variance_order_by {
  AddressId?: order_by;
  avatarId?: order_by;
  id?: order_by;
}

export interface Uuid_comparison_exp {
  _eq?: uuid;
  _gt?: uuid;
  _gte?: uuid;
  _in?: uuid[];
  _is_null?: boolean;
  _lt?: uuid;
  _lte?: uuid;
  _neq?: uuid;
  _nin?: uuid[];
}

export interface Addresses {
  city: string;
  country: string;
  id: number;
  line_1: string;
  other_Address_details?: string;
  phone?: string;
  province_or_state: string;
  user: Users;
  userById?: Users;
  userId: number;
  zip_or_postcode: string;
}

export interface Addresses_aggregate {
  aggregate?: Addresses_aggregate_fields;
  nodes: Addresses[];
}

export interface Addresses_aggregate_fields {
  avg?: Addresses_avg_fields;
  count?: number;
  max?: Addresses_max_fields;
  min?: Addresses_min_fields;
  stddev?: Addresses_stddev_fields;
  stddev_pop?: Addresses_stddev_pop_fields;
  stddev_samp?: Addresses_stddev_samp_fields;
  sum?: Addresses_sum_fields;
  var_pop?: Addresses_var_pop_fields;
  var_samp?: Addresses_var_samp_fields;
  variance?: Addresses_variance_fields;
}

export interface Addresses_avg_fields {
  id?: number;
  userId?: number;
}

export interface Addresses_max_fields {
  city?: string;
  country?: string;
  id?: number;
  line_1?: string;
  other_Address_details?: string;
  phone?: string;
  province_or_state?: string;
  userId?: number;
  zip_or_postcode?: string;
}

export interface Addresses_min_fields {
  city?: string;
  country?: string;
  id?: number;
  line_1?: string;
  other_Address_details?: string;
  phone?: string;
  province_or_state?: string;
  userId?: number;
  zip_or_postcode?: string;
}

export interface Addresses_mutation_response {
  affected_rows: number;
  returning: Addresses[];
}

export interface Addresses_stddev_fields {
  id?: number;
  userId?: number;
}

export interface Addresses_stddev_pop_fields {
  id?: number;
  userId?: number;
}

export interface Addresses_stddev_samp_fields {
  id?: number;
  userId?: number;
}

export interface Addresses_sum_fields {
  id?: number;
  userId?: number;
}

export interface Addresses_var_pop_fields {
  id?: number;
  userId?: number;
}

export interface Addresses_var_samp_fields {
  id?: number;
  userId?: number;
}

export interface Addresses_variance_fields {
  id?: number;
  userId?: number;
}

export interface Images {
  id: number;
  large_image_url?: string;
  pets: Pets[];
  Pets_aggregate: Pets_aggregate;
  url: string;
  users: Users[];
  users_aggregate: Users_aggregate;
}

export interface Images_aggregate {
  aggregate?: Images_aggregate_fields;
  nodes: Images[];
}

export interface Images_aggregate_fields {
  avg?: Images_avg_fields;
  count?: number;
  max?: Images_max_fields;
  min?: Images_min_fields;
  stddev?: Images_stddev_fields;
  stddev_pop?: Images_stddev_pop_fields;
  stddev_samp?: Images_stddev_samp_fields;
  sum?: Images_sum_fields;
  var_pop?: Images_var_pop_fields;
  var_samp?: Images_var_samp_fields;
  variance?: Images_variance_fields;
}

export interface Images_avg_fields {
  id?: number;
}

export interface Images_max_fields {
  id?: number;
  large_image_url?: string;
  url?: string;
}

export interface Images_min_fields {
  id?: number;
  large_image_url?: string;
  url?: string;
}

export interface Images_mutation_response {
  affected_rows: number;
  returning: Images[];
}

export interface Images_stddev_fields {
  id?: number;
}

export interface Images_stddev_pop_fields {
  id?: number;
}

export interface Images_stddev_samp_fields {
  id?: number;
}

export interface Images_sum_fields {
  id?: number;
}

export interface Images_var_pop_fields {
  id?: number;
}

export interface Images_var_samp_fields {
  id?: number;
}

export interface Images_variance_fields {
  id?: number;
}

export interface Mutation_root {
  delete_addresses?: Addresses_mutation_response;
  delete_addresses_by_pk?: Addresses;
  delete_images?: Images_mutation_response;
  delete_images_by_pk?: Images;
  delete_pet_species?: Pet_species_mutation_response;
  delete_pet_species_by_pk?: Pet_species;
  delete_pets?: Pets_mutation_response;
  delete_pets_by_pk?: Pets;
  delete_user_browsers?: User_browsers_mutation_response;
  delete_user_browsers_by_pk?: User_browsers;
  delete_user_pets?: User_Pets_mutation_response;
  delete_user_Pets_by_pk?: User_pets;
  delete_users?: Users_mutation_response;
  delete_users_by_pk?: Users;
  insert_addresses?: Addresses_mutation_response;
  insert_addresses_one?: Addresses;
  insert_images?: Images_mutation_response;
  insert_images_one?: Images;
  insert_pet_species?: Pet_species_mutation_response;
  insert_pet_species_one?: Pet_species;
  insert_pets?: Pets_mutation_response;
  insert_pets_one?: Pets;
  insert_user_browsers?: User_browsers_mutation_response;
  insert_user_browsers_one?: User_browsers;
  insert_user_pets?: User_Pets_mutation_response;
  insert_user_Pets_one?: User_pets;
  insert_users?: Users_mutation_response;
  insert_users_one?: Users;
  update_addresses?: Addresses_mutation_response;
  update_addresses_by_pk?: Addresses;
  update_images?: Images_mutation_response;
  update_images_by_pk?: Images;
  update_pet_species?: Pet_species_mutation_response;
  update_pet_species_by_pk?: Pet_species;
  update_pets?: Pets_mutation_response;
  update_pets_by_pk?: Pets;
  update_user_browsers?: User_browsers_mutation_response;
  update_user_browsers_by_pk?: User_browsers;
  update_user_pets?: User_Pets_mutation_response;
  update_user_Pets_by_pk?: User_pets;
  update_users?: Users_mutation_response;
  update_users_by_pk?: Users;
}

export interface Pet_species {
  id: number;
  pets: Pets[];
  pets_aggregate: Pets_aggregate;
  type: string;
}

export interface Pet_species_aggregate {
  aggregate?: Pet_species_aggregate_fields;
  nodes: Pet_species[];
}

export interface Pet_species_aggregate_fields {
  avg?: Pet_species_avg_fields;
  count?: number;
  max?: Pet_species_max_fields;
  min?: Pet_species_min_fields;
  stddev?: Pet_species_stddev_fields;
  stddev_pop?: Pet_species_stddev_pop_fields;
  stddev_samp?: Pet_species_stddev_samp_fields;
  sum?: Pet_species_sum_fields;
  var_pop?: Pet_species_var_pop_fields;
  var_samp?: Pet_species_var_samp_fields;
  variance?: Pet_species_variance_fields;
}

export interface Pet_species_avg_fields {
  id?: number;
}

export interface Pet_species_max_fields {
  id?: number;
  type?: string;
}

export interface Pet_species_min_fields {
  id?: number;
  type?: string;
}

export interface Pet_species_mutation_response {
  affected_rows: number;
  returning: Pet_species[];
}

export interface Pet_species_stddev_fields {
  id?: number;
}

export interface Pet_species_stddev_pop_fields {
  id?: number;
}

export interface Pet_species_stddev_samp_fields {
  id?: number;
}

export interface Pet_species_sum_fields {
  id?: number;
}

export interface Pet_species_var_pop_fields {
  id?: number;
}

export interface Pet_species_var_samp_fields {
  id?: number;
}

export interface Pet_species_variance_fields {
  id?: number;
}

export interface Pets {
  avatar?: Images;
  avatarId?: number;
  description?: string;
  id: number;
  name: string;
  pet_species: Pet_species;
  species: number;
  user_pets: User_pets[];
  User_Pets_aggregate: User_Pets_aggregate;
  uuid: uuid;
}

export interface Pets_aggregate {
  aggregate?: Pets_aggregate_fields;
  nodes: Pets[];
}

export interface Pets_aggregate_fields {
  avg?: Pets_avg_fields;
  count?: number;
  max?: Pets_max_fields;
  min?: Pets_min_fields;
  stddev?: Pets_stddev_fields;
  stddev_pop?: Pets_stddev_pop_fields;
  stddev_samp?: Pets_stddev_samp_fields;
  sum?: Pets_sum_fields;
  var_pop?: Pets_var_pop_fields;
  var_samp?: Pets_var_samp_fields;
  variance?: Pets_variance_fields;
}

export interface Pets_avg_fields {
  avatarId?: number;
  id?: number;
  species?: number;
}

export interface Pets_max_fields {
  avatarId?: number;
  description?: string;
  id?: number;
  name?: string;
  species?: number;
  uuid?: uuid;
}

export interface Pets_min_fields {
  avatarId?: number;
  description?: string;
  id?: number;
  name?: string;
  species?: number;
  uuid?: uuid;
}

export interface Pets_mutation_response {
  affected_rows: number;
  returning: Pets[];
}

export interface Pets_stddev_fields {
  avatarId?: number;
  id?: number;
  species?: number;
}

export interface Pets_stddev_pop_fields {
  avatarId?: number;
  id?: number;
  species?: number;
}

export interface Pets_stddev_samp_fields {
  avatarId?: number;
  id?: number;
  species?: number;
}

export interface Pets_sum_fields {
  avatarId?: number;
  id?: number;
  species?: number;
}

export interface Pets_var_pop_fields {
  avatarId?: number;
  id?: number;
  species?: number;
}

export interface Pets_var_samp_fields {
  avatarId?: number;
  id?: number;
  species?: number;
}

export interface Pets_variance_fields {
  avatarId?: number;
  id?: number;
  species?: number;
}

export interface Query_root {
  addresses: Addresses[];
  addresses_aggregate: Addresses_aggregate;
  addresses_by_pk?: Addresses;
  images: Images[];
  images_aggregate: Images_aggregate;
  images_by_pk?: Images;
  pet_species: Pet_species[];
  pet_species_aggregate: Pet_species_aggregate;
  pet_species_by_pk?: Pet_species;
  pets: Pets[];
  pets_aggregate: Pets_aggregate;
  pets_by_pk?: Pets;
  user_browsers: User_browsers[];
  user_browsers_aggregate: User_browsers_aggregate;
  user_browsers_by_pk?: User_browsers;
  user_pets: User_pets[];
  user_Pets_aggregate: User_Pets_aggregate;
  user_Pets_by_pk?: User_pets;
  users: Users[];
  users_aggregate: Users_aggregate;
  users_by_pk?: Users;
}

export interface Subscription_root {
  Addresses: Addresses[];
  Addresses_aggregate: Addresses_aggregate;
  Addresses_by_pk?: Addresses;
  images: Images[];
  Images_aggregate: Images_aggregate;
  Images_by_pk?: Images;
  pet_species: Pet_species[];
  Pet_species_aggregate: Pet_species_aggregate;
  Pet_species_by_pk?: Pet_species;
  pets: Pets[];
  Pets_aggregate: Pets_aggregate;
  Pets_by_pk?: Pets;
  user_browsers: User_browsers[];
  User_browsers_aggregate: User_browsers_aggregate;
  User_browsers_by_pk?: User_browsers;
  user_pets: User_pets[];
  User_Pets_aggregate: User_Pets_aggregate;
  User_Pets_by_pk?: User_pets;
  users: Users[];
  users_aggregate: Users_aggregate;
  users_by_pk?: Users;
}

export interface User_browsers {
  browser_subscription_object: json;
  id: number;
  user: Users;
  user_id: number;
}

export interface User_browsers_aggregate {
  aggregate?: User_browsers_aggregate_fields;
  nodes: User_browsers[];
}

export interface User_browsers_aggregate_fields {
  avg?: User_browsers_avg_fields;
  count?: number;
  max?: User_browsers_max_fields;
  min?: User_browsers_min_fields;
  stddev?: User_browsers_stddev_fields;
  stddev_pop?: User_browsers_stddev_pop_fields;
  stddev_samp?: User_browsers_stddev_samp_fields;
  sum?: User_browsers_sum_fields;
  var_pop?: User_browsers_var_pop_fields;
  var_samp?: User_browsers_var_samp_fields;
  variance?: User_browsers_variance_fields;
}

export interface User_browsers_avg_fields {
  id?: number;
  user_id?: number;
}

export interface User_browsers_max_fields {
  id?: number;
  user_id?: number;
}

export interface User_browsers_min_fields {
  id?: number;
  user_id?: number;
}

export interface User_browsers_mutation_response {
  affected_rows: number;
  returning: User_browsers[];
}

export interface User_browsers_stddev_fields {
  id?: number;
  user_id?: number;
}

export interface User_browsers_stddev_pop_fields {
  id?: number;
  user_id?: number;
}

export interface User_browsers_stddev_samp_fields {
  id?: number;
  user_id?: number;
}

export interface User_browsers_sum_fields {
  id?: number;
  user_id?: number;
}

export interface User_browsers_var_pop_fields {
  id?: number;
  user_id?: number;
}

export interface User_browsers_var_samp_fields {
  id?: number;
  user_id?: number;
}

export interface User_browsers_variance_fields {
  id?: number;
  user_id?: number;
}

export interface User_pets {
  id: number;
  pet: Pets;
  petId: number;
  user: Users;
  userId: number;
}

export interface User_Pets_aggregate {
  aggregate?: User_Pets_aggregate_fields;
  nodes: User_pets[];
}

export interface User_Pets_aggregate_fields {
  avg?: User_Pets_avg_fields;
  count?: number;
  max?: User_Pets_max_fields;
  min?: User_Pets_min_fields;
  stddev?: User_Pets_stddev_fields;
  stddev_pop?: User_Pets_stddev_pop_fields;
  stddev_samp?: User_Pets_stddev_samp_fields;
  sum?: User_Pets_sum_fields;
  var_pop?: User_Pets_var_pop_fields;
  var_samp?: User_Pets_var_samp_fields;
  variance?: User_Pets_variance_fields;
}

export interface User_Pets_avg_fields {
  id?: number;
  petId?: number;
  userId?: number;
}

export interface User_Pets_max_fields {
  id?: number;
  petId?: number;
  userId?: number;
}

export interface User_Pets_min_fields {
  id?: number;
  petId?: number;
  userId?: number;
}

export interface User_Pets_mutation_response {
  affected_rows: number;
  returning: User_pets[];
}

export interface User_Pets_stddev_fields {
  id?: number;
  petId?: number;
  userId?: number;
}

export interface User_Pets_stddev_pop_fields {
  id?: number;
  petId?: number;
  userId?: number;
}

export interface User_Pets_stddev_samp_fields {
  id?: number;
  petId?: number;
  userId?: number;
}

export interface User_Pets_sum_fields {
  id?: number;
  petId?: number;
  userId?: number;
}

export interface User_Pets_var_pop_fields {
  id?: number;
  petId?: number;
  userId?: number;
}

export interface User_Pets_var_samp_fields {
  id?: number;
  petId?: number;
  userId?: number;
}

export interface User_Pets_variance_fields {
  id?: number;
  petId?: number;
  userId?: number;
}

export interface Users {
  Address?: Addresses;
  AddressId?: number;
  authId: string;
  avatar?: Images;
  avatarId?: number;
  email: string;
  id: number;
  name: string;
  user_browser?: User_browsers;
  user_pets: User_pets[];
  User_Pets_aggregate: User_Pets_aggregate;
}

export interface Users_aggregate {
  aggregate?: Users_aggregate_fields;
  nodes: Users[];
}

export interface Users_aggregate_fields {
  avg?: Users_avg_fields;
  count?: number;
  max?: Users_max_fields;
  min?: Users_min_fields;
  stddev?: Users_stddev_fields;
  stddev_pop?: Users_stddev_pop_fields;
  stddev_samp?: Users_stddev_samp_fields;
  sum?: Users_sum_fields;
  var_pop?: Users_var_pop_fields;
  var_samp?: Users_var_samp_fields;
  variance?: Users_variance_fields;
}

export interface Users_avg_fields {
  AddressId?: number;
  avatarId?: number;
  id?: number;
}

export interface Users_max_fields {
  AddressId?: number;
  authId?: string;
  avatarId?: number;
  email?: string;
  id?: number;
  name?: string;
}

export interface Users_min_fields {
  AddressId?: number;
  authId?: string;
  avatarId?: number;
  email?: string;
  id?: number;
  name?: string;
}

export interface Users_mutation_response {
  affected_rows: number;
  returning: Users[];
}

export interface Users_stddev_fields {
  AddressId?: number;
  avatarId?: number;
  id?: number;
}

export interface Users_stddev_pop_fields {
  AddressId?: number;
  avatarId?: number;
  id?: number;
}

export interface Users_stddev_samp_fields {
  AddressId?: number;
  avatarId?: number;
  id?: number;
}

export interface Users_sum_fields {
  AddressId?: number;
  avatarId?: number;
  id?: number;
}

export interface Users_var_pop_fields {
  AddressId?: number;
  avatarId?: number;
  id?: number;
}

export interface Users_var_samp_fields {
  AddressId?: number;
  avatarId?: number;
  id?: number;
}

export interface Users_variance_fields {
  AddressId?: number;
  avatarId?: number;
  id?: number;
}

export type json = any;
export type uuid = any;

export interface ISchema {
  query_root: Query_root;
  mutation_root: Mutation_root;
  subscription_root: Subscription_root;
}

export interface Query_root {}

export interface Mutation_root {}

export interface Subscription_root {}
