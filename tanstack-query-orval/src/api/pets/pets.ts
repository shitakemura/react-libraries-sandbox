/**
 * Generated by orval v6.15.0 🍺
 * Do not edit manually.
 * Swagger Petstore
 * OpenAPI spec version: 1.0.0
 */
import * as axios from 'axios';
import type {
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError
} from 'axios'
import {
  useQuery,
  useMutation
} from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseMutationOptions,
  QueryFunction,
  MutationFunction,
  UseQueryResult,
  QueryKey
} from '@tanstack/react-query'
import type {
  Pets,
  Error,
  ListPetsParams,
  CreatePetsBody,
  Pet
} from '../../model'

type AwaitedInput<T> = PromiseLike<T> | T;

      type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;


/**
 * @summary List all pets
 */
export const listPets = (
    params?: ListPetsParams, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<Pets>> => {
    return axios.default.get(
      `/pets`,{
    ...options,
        params: {...params, ...options?.params},}
    );
  }


export const getListPetsQueryKey = (params?: ListPetsParams,) => [`/pets`, ...(params ? [params]: [])] as const;
  

    
export const getListPetsQueryOptions = <TData = Awaited<ReturnType<typeof listPets>>, TError = AxiosError<Error>>(params?: ListPetsParams, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof listPets>>, TError, TData>, axios?: AxiosRequestConfig}
): UseQueryOptions<Awaited<ReturnType<typeof listPets>>, TError, TData> & { queryKey: QueryKey } => {
const {query: queryOptions, axios: axiosOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getListPetsQueryKey(params);

  
  
    const queryFn: QueryFunction<Awaited<ReturnType<typeof listPets>>> = ({ signal }) => listPets(params, { signal, ...axiosOptions });
    
      
      
   return  { queryKey, queryFn, ...queryOptions}}

export type ListPetsQueryResult = NonNullable<Awaited<ReturnType<typeof listPets>>>
export type ListPetsQueryError = AxiosError<Error>

export const useListPets = <TData = Awaited<ReturnType<typeof listPets>>, TError = AxiosError<Error>>(
 params?: ListPetsParams, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof listPets>>, TError, TData>, axios?: AxiosRequestConfig}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getListPetsQueryOptions(params,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey;

  return query;
}

/**
 * @summary Create a pet
 */
export const createPets = (
    createPetsBody: CreatePetsBody, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<void>> => {
    return axios.default.post(
      `/pets`,
      createPetsBody,options
    );
  }



export const getCreatePetsMutationOptions = <TError = AxiosError<Error>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof createPets>>, TError,{data: CreatePetsBody}, TContext>, axios?: AxiosRequestConfig}
): UseMutationOptions<Awaited<ReturnType<typeof createPets>>, TError,{data: CreatePetsBody}, TContext> => {
 const {mutation: mutationOptions, axios: axiosOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof createPets>>, {data: CreatePetsBody}> = (props) => {
          const {data} = props ?? {};

          return  createPets(data,axiosOptions)
        }

        

 
   return  { mutationFn, ...mutationOptions }}

    export type CreatePetsMutationResult = NonNullable<Awaited<ReturnType<typeof createPets>>>
    export type CreatePetsMutationBody = CreatePetsBody
    export type CreatePetsMutationError = AxiosError<Error>

    export const useCreatePets = <TError = AxiosError<Error>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof createPets>>, TError,{data: CreatePetsBody}, TContext>, axios?: AxiosRequestConfig}
) => {
    
      const mutationOptions = getCreatePetsMutationOptions(options);
     
      return useMutation(mutationOptions);
    }
    /**
 * @summary Info for a specific pet
 */
export const showPetById = (
    petId: string, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<Pet>> => {
    return axios.default.get(
      `/pets/${petId}`,options
    );
  }


export const getShowPetByIdQueryKey = (petId: string,) => [`/pets/${petId}`] as const;
  

    
export const getShowPetByIdQueryOptions = <TData = Awaited<ReturnType<typeof showPetById>>, TError = AxiosError<Error>>(petId: string, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof showPetById>>, TError, TData>, axios?: AxiosRequestConfig}
): UseQueryOptions<Awaited<ReturnType<typeof showPetById>>, TError, TData> & { queryKey: QueryKey } => {
const {query: queryOptions, axios: axiosOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getShowPetByIdQueryKey(petId);

  
  
    const queryFn: QueryFunction<Awaited<ReturnType<typeof showPetById>>> = ({ signal }) => showPetById(petId, { signal, ...axiosOptions });
    
      
      
   return  { queryKey, queryFn, enabled: !!(petId), ...queryOptions}}

export type ShowPetByIdQueryResult = NonNullable<Awaited<ReturnType<typeof showPetById>>>
export type ShowPetByIdQueryError = AxiosError<Error>

export const useShowPetById = <TData = Awaited<ReturnType<typeof showPetById>>, TError = AxiosError<Error>>(
 petId: string, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof showPetById>>, TError, TData>, axios?: AxiosRequestConfig}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getShowPetByIdQueryOptions(petId,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey;

  return query;
}
