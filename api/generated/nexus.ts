/**
 * This file was automatically generated by GraphQL Nexus
 * Do not make changes to this file directly
 */







declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  UserCreateInput: { // input type
    id?: string | null; // ID
    name: string; // String!
  }
  UserUpdateInput: { // input type
    name?: string | null; // String
  }
  UserUpdateManyMutationInput: { // input type
    name?: string | null; // String
  }
  UserWhereInput: { // input type
    AND?: NexusGenInputs['UserWhereInput'][] | null; // [UserWhereInput!]
    id?: string | null; // ID
    id_contains?: string | null; // ID
    id_ends_with?: string | null; // ID
    id_gt?: string | null; // ID
    id_gte?: string | null; // ID
    id_in?: string[] | null; // [ID!]
    id_lt?: string | null; // ID
    id_lte?: string | null; // ID
    id_not?: string | null; // ID
    id_not_contains?: string | null; // ID
    id_not_ends_with?: string | null; // ID
    id_not_in?: string[] | null; // [ID!]
    id_not_starts_with?: string | null; // ID
    id_starts_with?: string | null; // ID
    name?: string | null; // String
    name_contains?: string | null; // String
    name_ends_with?: string | null; // String
    name_gt?: string | null; // String
    name_gte?: string | null; // String
    name_in?: string[] | null; // [String!]
    name_lt?: string | null; // String
    name_lte?: string | null; // String
    name_not?: string | null; // String
    name_not_contains?: string | null; // String
    name_not_ends_with?: string | null; // String
    name_not_in?: string[] | null; // [String!]
    name_not_starts_with?: string | null; // String
    name_starts_with?: string | null; // String
    NOT?: NexusGenInputs['UserWhereInput'][] | null; // [UserWhereInput!]
    OR?: NexusGenInputs['UserWhereInput'][] | null; // [UserWhereInput!]
  }
  UserWhereUniqueInput: { // input type
    id?: string | null; // ID
  }
}

export interface NexusGenEnums {
  UserOrderByInput: "createdAt_ASC" | "createdAt_DESC" | "id_ASC" | "id_DESC" | "name_ASC" | "name_DESC" | "updatedAt_ASC" | "updatedAt_DESC"
}

export interface NexusGenRootTypes {
  AggregateUser: { // root type
    count: number; // Int!
  }
  BatchPayload: { // root type
    count: any; // Long!
  }
  Mutation: {};
  PageInfo: { // root type
    endCursor?: string | null; // String
    hasNextPage: boolean; // Boolean!
    hasPreviousPage: boolean; // Boolean!
    startCursor?: string | null; // String
  }
  Query: {};
  User: { // root type
    id: string; // ID!
    name: string; // String!
  }
  UserConnection: { // root type
    edges: NexusGenRootTypes['UserEdge'][]; // [UserEdge!]!
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  UserEdge: { // root type
    cursor: string; // String!
    node: NexusGenRootTypes['User']; // User!
  }
  String: string;
  Int: number;
  Float: number;
  Boolean: boolean;
  ID: string;
  Long: any;
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  UserCreateInput: NexusGenInputs['UserCreateInput'];
  UserUpdateInput: NexusGenInputs['UserUpdateInput'];
  UserUpdateManyMutationInput: NexusGenInputs['UserUpdateManyMutationInput'];
  UserWhereInput: NexusGenInputs['UserWhereInput'];
  UserWhereUniqueInput: NexusGenInputs['UserWhereUniqueInput'];
  UserOrderByInput: NexusGenEnums['UserOrderByInput'];
}

export interface NexusGenFieldTypes {
  AggregateUser: { // field return type
    count: number; // Int!
  }
  BatchPayload: { // field return type
    count: any; // Long!
  }
  Mutation: { // field return type
    createUser: NexusGenRootTypes['User']; // User!
    deleteManyUsers: NexusGenRootTypes['BatchPayload']; // BatchPayload!
    deleteUser: NexusGenRootTypes['User'] | null; // User
    updateManyUsers: NexusGenRootTypes['BatchPayload']; // BatchPayload!
    updateUser: NexusGenRootTypes['User'] | null; // User
    upsertUser: NexusGenRootTypes['User']; // User!
  }
  PageInfo: { // field return type
    endCursor: string | null; // String
    hasNextPage: boolean; // Boolean!
    hasPreviousPage: boolean; // Boolean!
    startCursor: string | null; // String
  }
  Query: { // field return type
    user: NexusGenRootTypes['User'] | null; // User
    users: NexusGenRootTypes['User'][]; // [User!]!
    usersConnection: NexusGenRootTypes['UserConnection']; // UserConnection!
  }
  User: { // field return type
    id: string; // ID!
    name: string; // String!
  }
  UserConnection: { // field return type
    aggregate: NexusGenRootTypes['AggregateUser']; // AggregateUser!
    edges: NexusGenRootTypes['UserEdge'][]; // [UserEdge!]!
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  UserEdge: { // field return type
    cursor: string; // String!
    node: NexusGenRootTypes['User']; // User!
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createUser: { // args
      data: NexusGenInputs['UserCreateInput']; // UserCreateInput!
    }
    deleteManyUsers: { // args
      where?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    }
    deleteUser: { // args
      where: NexusGenInputs['UserWhereUniqueInput']; // UserWhereUniqueInput!
    }
    updateManyUsers: { // args
      data: NexusGenInputs['UserUpdateManyMutationInput']; // UserUpdateManyMutationInput!
      where?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    }
    updateUser: { // args
      data: NexusGenInputs['UserUpdateInput']; // UserUpdateInput!
      where: NexusGenInputs['UserWhereUniqueInput']; // UserWhereUniqueInput!
    }
    upsertUser: { // args
      create: NexusGenInputs['UserCreateInput']; // UserCreateInput!
      update: NexusGenInputs['UserUpdateInput']; // UserUpdateInput!
      where: NexusGenInputs['UserWhereUniqueInput']; // UserWhereUniqueInput!
    }
  }
  Query: {
    user: { // args
      where: NexusGenInputs['UserWhereUniqueInput']; // UserWhereUniqueInput!
    }
    users: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['UserOrderByInput'] | null; // UserOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    }
    usersConnection: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['UserOrderByInput'] | null; // UserOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "AggregateUser" | "BatchPayload" | "Mutation" | "PageInfo" | "Query" | "User" | "UserConnection" | "UserEdge";

export type NexusGenInputNames = "UserCreateInput" | "UserUpdateInput" | "UserUpdateManyMutationInput" | "UserWhereInput" | "UserWhereUniqueInput";

export type NexusGenEnumNames = "UserOrderByInput";

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = "Boolean" | "Float" | "ID" | "Int" | "Long" | "String";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: any;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}