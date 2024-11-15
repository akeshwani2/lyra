
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model CompletedTask
 * 
 */
export type CompletedTask = $Result.DefaultSelection<Prisma.$CompletedTaskPayload>
/**
 * Model CompletedColumn
 * 
 */
export type CompletedColumn = $Result.DefaultSelection<Prisma.$CompletedColumnPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more CompletedTasks
 * const completedTasks = await prisma.completedTask.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more CompletedTasks
   * const completedTasks = await prisma.completedTask.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.completedTask`: Exposes CRUD operations for the **CompletedTask** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CompletedTasks
    * const completedTasks = await prisma.completedTask.findMany()
    * ```
    */
  get completedTask(): Prisma.CompletedTaskDelegate<ExtArgs>;

  /**
   * `prisma.completedColumn`: Exposes CRUD operations for the **CompletedColumn** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CompletedColumns
    * const completedColumns = await prisma.completedColumn.findMany()
    * ```
    */
  get completedColumn(): Prisma.CompletedColumnDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    CompletedTask: 'CompletedTask',
    CompletedColumn: 'CompletedColumn'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "completedTask" | "completedColumn"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      CompletedTask: {
        payload: Prisma.$CompletedTaskPayload<ExtArgs>
        fields: Prisma.CompletedTaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompletedTaskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedTaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompletedTaskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedTaskPayload>
          }
          findFirst: {
            args: Prisma.CompletedTaskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedTaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompletedTaskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedTaskPayload>
          }
          findMany: {
            args: Prisma.CompletedTaskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedTaskPayload>[]
          }
          create: {
            args: Prisma.CompletedTaskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedTaskPayload>
          }
          createMany: {
            args: Prisma.CompletedTaskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompletedTaskCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedTaskPayload>[]
          }
          delete: {
            args: Prisma.CompletedTaskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedTaskPayload>
          }
          update: {
            args: Prisma.CompletedTaskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedTaskPayload>
          }
          deleteMany: {
            args: Prisma.CompletedTaskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompletedTaskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CompletedTaskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedTaskPayload>
          }
          aggregate: {
            args: Prisma.CompletedTaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompletedTask>
          }
          groupBy: {
            args: Prisma.CompletedTaskGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompletedTaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompletedTaskCountArgs<ExtArgs>
            result: $Utils.Optional<CompletedTaskCountAggregateOutputType> | number
          }
        }
      }
      CompletedColumn: {
        payload: Prisma.$CompletedColumnPayload<ExtArgs>
        fields: Prisma.CompletedColumnFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompletedColumnFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedColumnPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompletedColumnFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedColumnPayload>
          }
          findFirst: {
            args: Prisma.CompletedColumnFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedColumnPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompletedColumnFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedColumnPayload>
          }
          findMany: {
            args: Prisma.CompletedColumnFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedColumnPayload>[]
          }
          create: {
            args: Prisma.CompletedColumnCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedColumnPayload>
          }
          createMany: {
            args: Prisma.CompletedColumnCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompletedColumnCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedColumnPayload>[]
          }
          delete: {
            args: Prisma.CompletedColumnDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedColumnPayload>
          }
          update: {
            args: Prisma.CompletedColumnUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedColumnPayload>
          }
          deleteMany: {
            args: Prisma.CompletedColumnDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompletedColumnUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CompletedColumnUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedColumnPayload>
          }
          aggregate: {
            args: Prisma.CompletedColumnAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompletedColumn>
          }
          groupBy: {
            args: Prisma.CompletedColumnGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompletedColumnGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompletedColumnCountArgs<ExtArgs>
            result: $Utils.Optional<CompletedColumnCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model CompletedTask
   */

  export type AggregateCompletedTask = {
    _count: CompletedTaskCountAggregateOutputType | null
    _avg: CompletedTaskAvgAggregateOutputType | null
    _sum: CompletedTaskSumAggregateOutputType | null
    _min: CompletedTaskMinAggregateOutputType | null
    _max: CompletedTaskMaxAggregateOutputType | null
  }

  export type CompletedTaskAvgAggregateOutputType = {
    order: number | null
  }

  export type CompletedTaskSumAggregateOutputType = {
    order: number | null
  }

  export type CompletedTaskMinAggregateOutputType = {
    id: string | null
    content: string | null
    userId: string | null
    boardId: string | null
    columnId: string | null
    originalCardId: string | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompletedTaskMaxAggregateOutputType = {
    id: string | null
    content: string | null
    userId: string | null
    boardId: string | null
    columnId: string | null
    originalCardId: string | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompletedTaskCountAggregateOutputType = {
    id: number
    content: number
    userId: number
    boardId: number
    columnId: number
    originalCardId: number
    order: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CompletedTaskAvgAggregateInputType = {
    order?: true
  }

  export type CompletedTaskSumAggregateInputType = {
    order?: true
  }

  export type CompletedTaskMinAggregateInputType = {
    id?: true
    content?: true
    userId?: true
    boardId?: true
    columnId?: true
    originalCardId?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompletedTaskMaxAggregateInputType = {
    id?: true
    content?: true
    userId?: true
    boardId?: true
    columnId?: true
    originalCardId?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompletedTaskCountAggregateInputType = {
    id?: true
    content?: true
    userId?: true
    boardId?: true
    columnId?: true
    originalCardId?: true
    order?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CompletedTaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompletedTask to aggregate.
     */
    where?: CompletedTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompletedTasks to fetch.
     */
    orderBy?: CompletedTaskOrderByWithRelationInput | CompletedTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompletedTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompletedTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompletedTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CompletedTasks
    **/
    _count?: true | CompletedTaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompletedTaskAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompletedTaskSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompletedTaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompletedTaskMaxAggregateInputType
  }

  export type GetCompletedTaskAggregateType<T extends CompletedTaskAggregateArgs> = {
        [P in keyof T & keyof AggregateCompletedTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompletedTask[P]>
      : GetScalarType<T[P], AggregateCompletedTask[P]>
  }




  export type CompletedTaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompletedTaskWhereInput
    orderBy?: CompletedTaskOrderByWithAggregationInput | CompletedTaskOrderByWithAggregationInput[]
    by: CompletedTaskScalarFieldEnum[] | CompletedTaskScalarFieldEnum
    having?: CompletedTaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompletedTaskCountAggregateInputType | true
    _avg?: CompletedTaskAvgAggregateInputType
    _sum?: CompletedTaskSumAggregateInputType
    _min?: CompletedTaskMinAggregateInputType
    _max?: CompletedTaskMaxAggregateInputType
  }

  export type CompletedTaskGroupByOutputType = {
    id: string
    content: string
    userId: string
    boardId: string
    columnId: string
    originalCardId: string
    order: number
    createdAt: Date
    updatedAt: Date
    _count: CompletedTaskCountAggregateOutputType | null
    _avg: CompletedTaskAvgAggregateOutputType | null
    _sum: CompletedTaskSumAggregateOutputType | null
    _min: CompletedTaskMinAggregateOutputType | null
    _max: CompletedTaskMaxAggregateOutputType | null
  }

  type GetCompletedTaskGroupByPayload<T extends CompletedTaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompletedTaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompletedTaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompletedTaskGroupByOutputType[P]>
            : GetScalarType<T[P], CompletedTaskGroupByOutputType[P]>
        }
      >
    >


  export type CompletedTaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    userId?: boolean
    boardId?: boolean
    columnId?: boolean
    originalCardId?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["completedTask"]>

  export type CompletedTaskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    userId?: boolean
    boardId?: boolean
    columnId?: boolean
    originalCardId?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["completedTask"]>

  export type CompletedTaskSelectScalar = {
    id?: boolean
    content?: boolean
    userId?: boolean
    boardId?: boolean
    columnId?: boolean
    originalCardId?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $CompletedTaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CompletedTask"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content: string
      userId: string
      boardId: string
      columnId: string
      originalCardId: string
      order: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["completedTask"]>
    composites: {}
  }

  type CompletedTaskGetPayload<S extends boolean | null | undefined | CompletedTaskDefaultArgs> = $Result.GetResult<Prisma.$CompletedTaskPayload, S>

  type CompletedTaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CompletedTaskFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CompletedTaskCountAggregateInputType | true
    }

  export interface CompletedTaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CompletedTask'], meta: { name: 'CompletedTask' } }
    /**
     * Find zero or one CompletedTask that matches the filter.
     * @param {CompletedTaskFindUniqueArgs} args - Arguments to find a CompletedTask
     * @example
     * // Get one CompletedTask
     * const completedTask = await prisma.completedTask.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompletedTaskFindUniqueArgs>(args: SelectSubset<T, CompletedTaskFindUniqueArgs<ExtArgs>>): Prisma__CompletedTaskClient<$Result.GetResult<Prisma.$CompletedTaskPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one CompletedTask that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CompletedTaskFindUniqueOrThrowArgs} args - Arguments to find a CompletedTask
     * @example
     * // Get one CompletedTask
     * const completedTask = await prisma.completedTask.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompletedTaskFindUniqueOrThrowArgs>(args: SelectSubset<T, CompletedTaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompletedTaskClient<$Result.GetResult<Prisma.$CompletedTaskPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first CompletedTask that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletedTaskFindFirstArgs} args - Arguments to find a CompletedTask
     * @example
     * // Get one CompletedTask
     * const completedTask = await prisma.completedTask.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompletedTaskFindFirstArgs>(args?: SelectSubset<T, CompletedTaskFindFirstArgs<ExtArgs>>): Prisma__CompletedTaskClient<$Result.GetResult<Prisma.$CompletedTaskPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first CompletedTask that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletedTaskFindFirstOrThrowArgs} args - Arguments to find a CompletedTask
     * @example
     * // Get one CompletedTask
     * const completedTask = await prisma.completedTask.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompletedTaskFindFirstOrThrowArgs>(args?: SelectSubset<T, CompletedTaskFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompletedTaskClient<$Result.GetResult<Prisma.$CompletedTaskPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more CompletedTasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletedTaskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CompletedTasks
     * const completedTasks = await prisma.completedTask.findMany()
     * 
     * // Get first 10 CompletedTasks
     * const completedTasks = await prisma.completedTask.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const completedTaskWithIdOnly = await prisma.completedTask.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompletedTaskFindManyArgs>(args?: SelectSubset<T, CompletedTaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompletedTaskPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a CompletedTask.
     * @param {CompletedTaskCreateArgs} args - Arguments to create a CompletedTask.
     * @example
     * // Create one CompletedTask
     * const CompletedTask = await prisma.completedTask.create({
     *   data: {
     *     // ... data to create a CompletedTask
     *   }
     * })
     * 
     */
    create<T extends CompletedTaskCreateArgs>(args: SelectSubset<T, CompletedTaskCreateArgs<ExtArgs>>): Prisma__CompletedTaskClient<$Result.GetResult<Prisma.$CompletedTaskPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many CompletedTasks.
     * @param {CompletedTaskCreateManyArgs} args - Arguments to create many CompletedTasks.
     * @example
     * // Create many CompletedTasks
     * const completedTask = await prisma.completedTask.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompletedTaskCreateManyArgs>(args?: SelectSubset<T, CompletedTaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CompletedTasks and returns the data saved in the database.
     * @param {CompletedTaskCreateManyAndReturnArgs} args - Arguments to create many CompletedTasks.
     * @example
     * // Create many CompletedTasks
     * const completedTask = await prisma.completedTask.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CompletedTasks and only return the `id`
     * const completedTaskWithIdOnly = await prisma.completedTask.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompletedTaskCreateManyAndReturnArgs>(args?: SelectSubset<T, CompletedTaskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompletedTaskPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a CompletedTask.
     * @param {CompletedTaskDeleteArgs} args - Arguments to delete one CompletedTask.
     * @example
     * // Delete one CompletedTask
     * const CompletedTask = await prisma.completedTask.delete({
     *   where: {
     *     // ... filter to delete one CompletedTask
     *   }
     * })
     * 
     */
    delete<T extends CompletedTaskDeleteArgs>(args: SelectSubset<T, CompletedTaskDeleteArgs<ExtArgs>>): Prisma__CompletedTaskClient<$Result.GetResult<Prisma.$CompletedTaskPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one CompletedTask.
     * @param {CompletedTaskUpdateArgs} args - Arguments to update one CompletedTask.
     * @example
     * // Update one CompletedTask
     * const completedTask = await prisma.completedTask.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompletedTaskUpdateArgs>(args: SelectSubset<T, CompletedTaskUpdateArgs<ExtArgs>>): Prisma__CompletedTaskClient<$Result.GetResult<Prisma.$CompletedTaskPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more CompletedTasks.
     * @param {CompletedTaskDeleteManyArgs} args - Arguments to filter CompletedTasks to delete.
     * @example
     * // Delete a few CompletedTasks
     * const { count } = await prisma.completedTask.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompletedTaskDeleteManyArgs>(args?: SelectSubset<T, CompletedTaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompletedTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletedTaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CompletedTasks
     * const completedTask = await prisma.completedTask.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompletedTaskUpdateManyArgs>(args: SelectSubset<T, CompletedTaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CompletedTask.
     * @param {CompletedTaskUpsertArgs} args - Arguments to update or create a CompletedTask.
     * @example
     * // Update or create a CompletedTask
     * const completedTask = await prisma.completedTask.upsert({
     *   create: {
     *     // ... data to create a CompletedTask
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CompletedTask we want to update
     *   }
     * })
     */
    upsert<T extends CompletedTaskUpsertArgs>(args: SelectSubset<T, CompletedTaskUpsertArgs<ExtArgs>>): Prisma__CompletedTaskClient<$Result.GetResult<Prisma.$CompletedTaskPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of CompletedTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletedTaskCountArgs} args - Arguments to filter CompletedTasks to count.
     * @example
     * // Count the number of CompletedTasks
     * const count = await prisma.completedTask.count({
     *   where: {
     *     // ... the filter for the CompletedTasks we want to count
     *   }
     * })
    **/
    count<T extends CompletedTaskCountArgs>(
      args?: Subset<T, CompletedTaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompletedTaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CompletedTask.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletedTaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompletedTaskAggregateArgs>(args: Subset<T, CompletedTaskAggregateArgs>): Prisma.PrismaPromise<GetCompletedTaskAggregateType<T>>

    /**
     * Group by CompletedTask.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletedTaskGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CompletedTaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompletedTaskGroupByArgs['orderBy'] }
        : { orderBy?: CompletedTaskGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CompletedTaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompletedTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CompletedTask model
   */
  readonly fields: CompletedTaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CompletedTask.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompletedTaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CompletedTask model
   */ 
  interface CompletedTaskFieldRefs {
    readonly id: FieldRef<"CompletedTask", 'String'>
    readonly content: FieldRef<"CompletedTask", 'String'>
    readonly userId: FieldRef<"CompletedTask", 'String'>
    readonly boardId: FieldRef<"CompletedTask", 'String'>
    readonly columnId: FieldRef<"CompletedTask", 'String'>
    readonly originalCardId: FieldRef<"CompletedTask", 'String'>
    readonly order: FieldRef<"CompletedTask", 'Int'>
    readonly createdAt: FieldRef<"CompletedTask", 'DateTime'>
    readonly updatedAt: FieldRef<"CompletedTask", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CompletedTask findUnique
   */
  export type CompletedTaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedTask
     */
    select?: CompletedTaskSelect<ExtArgs> | null
    /**
     * Filter, which CompletedTask to fetch.
     */
    where: CompletedTaskWhereUniqueInput
  }

  /**
   * CompletedTask findUniqueOrThrow
   */
  export type CompletedTaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedTask
     */
    select?: CompletedTaskSelect<ExtArgs> | null
    /**
     * Filter, which CompletedTask to fetch.
     */
    where: CompletedTaskWhereUniqueInput
  }

  /**
   * CompletedTask findFirst
   */
  export type CompletedTaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedTask
     */
    select?: CompletedTaskSelect<ExtArgs> | null
    /**
     * Filter, which CompletedTask to fetch.
     */
    where?: CompletedTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompletedTasks to fetch.
     */
    orderBy?: CompletedTaskOrderByWithRelationInput | CompletedTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompletedTasks.
     */
    cursor?: CompletedTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompletedTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompletedTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompletedTasks.
     */
    distinct?: CompletedTaskScalarFieldEnum | CompletedTaskScalarFieldEnum[]
  }

  /**
   * CompletedTask findFirstOrThrow
   */
  export type CompletedTaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedTask
     */
    select?: CompletedTaskSelect<ExtArgs> | null
    /**
     * Filter, which CompletedTask to fetch.
     */
    where?: CompletedTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompletedTasks to fetch.
     */
    orderBy?: CompletedTaskOrderByWithRelationInput | CompletedTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompletedTasks.
     */
    cursor?: CompletedTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompletedTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompletedTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompletedTasks.
     */
    distinct?: CompletedTaskScalarFieldEnum | CompletedTaskScalarFieldEnum[]
  }

  /**
   * CompletedTask findMany
   */
  export type CompletedTaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedTask
     */
    select?: CompletedTaskSelect<ExtArgs> | null
    /**
     * Filter, which CompletedTasks to fetch.
     */
    where?: CompletedTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompletedTasks to fetch.
     */
    orderBy?: CompletedTaskOrderByWithRelationInput | CompletedTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CompletedTasks.
     */
    cursor?: CompletedTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompletedTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompletedTasks.
     */
    skip?: number
    distinct?: CompletedTaskScalarFieldEnum | CompletedTaskScalarFieldEnum[]
  }

  /**
   * CompletedTask create
   */
  export type CompletedTaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedTask
     */
    select?: CompletedTaskSelect<ExtArgs> | null
    /**
     * The data needed to create a CompletedTask.
     */
    data: XOR<CompletedTaskCreateInput, CompletedTaskUncheckedCreateInput>
  }

  /**
   * CompletedTask createMany
   */
  export type CompletedTaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CompletedTasks.
     */
    data: CompletedTaskCreateManyInput | CompletedTaskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CompletedTask createManyAndReturn
   */
  export type CompletedTaskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedTask
     */
    select?: CompletedTaskSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many CompletedTasks.
     */
    data: CompletedTaskCreateManyInput | CompletedTaskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CompletedTask update
   */
  export type CompletedTaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedTask
     */
    select?: CompletedTaskSelect<ExtArgs> | null
    /**
     * The data needed to update a CompletedTask.
     */
    data: XOR<CompletedTaskUpdateInput, CompletedTaskUncheckedUpdateInput>
    /**
     * Choose, which CompletedTask to update.
     */
    where: CompletedTaskWhereUniqueInput
  }

  /**
   * CompletedTask updateMany
   */
  export type CompletedTaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CompletedTasks.
     */
    data: XOR<CompletedTaskUpdateManyMutationInput, CompletedTaskUncheckedUpdateManyInput>
    /**
     * Filter which CompletedTasks to update
     */
    where?: CompletedTaskWhereInput
  }

  /**
   * CompletedTask upsert
   */
  export type CompletedTaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedTask
     */
    select?: CompletedTaskSelect<ExtArgs> | null
    /**
     * The filter to search for the CompletedTask to update in case it exists.
     */
    where: CompletedTaskWhereUniqueInput
    /**
     * In case the CompletedTask found by the `where` argument doesn't exist, create a new CompletedTask with this data.
     */
    create: XOR<CompletedTaskCreateInput, CompletedTaskUncheckedCreateInput>
    /**
     * In case the CompletedTask was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompletedTaskUpdateInput, CompletedTaskUncheckedUpdateInput>
  }

  /**
   * CompletedTask delete
   */
  export type CompletedTaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedTask
     */
    select?: CompletedTaskSelect<ExtArgs> | null
    /**
     * Filter which CompletedTask to delete.
     */
    where: CompletedTaskWhereUniqueInput
  }

  /**
   * CompletedTask deleteMany
   */
  export type CompletedTaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompletedTasks to delete
     */
    where?: CompletedTaskWhereInput
  }

  /**
   * CompletedTask without action
   */
  export type CompletedTaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedTask
     */
    select?: CompletedTaskSelect<ExtArgs> | null
  }


  /**
   * Model CompletedColumn
   */

  export type AggregateCompletedColumn = {
    _count: CompletedColumnCountAggregateOutputType | null
    _avg: CompletedColumnAvgAggregateOutputType | null
    _sum: CompletedColumnSumAggregateOutputType | null
    _min: CompletedColumnMinAggregateOutputType | null
    _max: CompletedColumnMaxAggregateOutputType | null
  }

  export type CompletedColumnAvgAggregateOutputType = {
    order: number | null
  }

  export type CompletedColumnSumAggregateOutputType = {
    order: number | null
  }

  export type CompletedColumnMinAggregateOutputType = {
    id: string | null
    title: string | null
    boardId: string | null
    userId: string | null
    order: number | null
    createdAt: Date | null
  }

  export type CompletedColumnMaxAggregateOutputType = {
    id: string | null
    title: string | null
    boardId: string | null
    userId: string | null
    order: number | null
    createdAt: Date | null
  }

  export type CompletedColumnCountAggregateOutputType = {
    id: number
    title: number
    boardId: number
    userId: number
    order: number
    createdAt: number
    _all: number
  }


  export type CompletedColumnAvgAggregateInputType = {
    order?: true
  }

  export type CompletedColumnSumAggregateInputType = {
    order?: true
  }

  export type CompletedColumnMinAggregateInputType = {
    id?: true
    title?: true
    boardId?: true
    userId?: true
    order?: true
    createdAt?: true
  }

  export type CompletedColumnMaxAggregateInputType = {
    id?: true
    title?: true
    boardId?: true
    userId?: true
    order?: true
    createdAt?: true
  }

  export type CompletedColumnCountAggregateInputType = {
    id?: true
    title?: true
    boardId?: true
    userId?: true
    order?: true
    createdAt?: true
    _all?: true
  }

  export type CompletedColumnAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompletedColumn to aggregate.
     */
    where?: CompletedColumnWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompletedColumns to fetch.
     */
    orderBy?: CompletedColumnOrderByWithRelationInput | CompletedColumnOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompletedColumnWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompletedColumns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompletedColumns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CompletedColumns
    **/
    _count?: true | CompletedColumnCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompletedColumnAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompletedColumnSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompletedColumnMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompletedColumnMaxAggregateInputType
  }

  export type GetCompletedColumnAggregateType<T extends CompletedColumnAggregateArgs> = {
        [P in keyof T & keyof AggregateCompletedColumn]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompletedColumn[P]>
      : GetScalarType<T[P], AggregateCompletedColumn[P]>
  }




  export type CompletedColumnGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompletedColumnWhereInput
    orderBy?: CompletedColumnOrderByWithAggregationInput | CompletedColumnOrderByWithAggregationInput[]
    by: CompletedColumnScalarFieldEnum[] | CompletedColumnScalarFieldEnum
    having?: CompletedColumnScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompletedColumnCountAggregateInputType | true
    _avg?: CompletedColumnAvgAggregateInputType
    _sum?: CompletedColumnSumAggregateInputType
    _min?: CompletedColumnMinAggregateInputType
    _max?: CompletedColumnMaxAggregateInputType
  }

  export type CompletedColumnGroupByOutputType = {
    id: string
    title: string
    boardId: string
    userId: string
    order: number
    createdAt: Date
    _count: CompletedColumnCountAggregateOutputType | null
    _avg: CompletedColumnAvgAggregateOutputType | null
    _sum: CompletedColumnSumAggregateOutputType | null
    _min: CompletedColumnMinAggregateOutputType | null
    _max: CompletedColumnMaxAggregateOutputType | null
  }

  type GetCompletedColumnGroupByPayload<T extends CompletedColumnGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompletedColumnGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompletedColumnGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompletedColumnGroupByOutputType[P]>
            : GetScalarType<T[P], CompletedColumnGroupByOutputType[P]>
        }
      >
    >


  export type CompletedColumnSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    boardId?: boolean
    userId?: boolean
    order?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["completedColumn"]>

  export type CompletedColumnSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    boardId?: boolean
    userId?: boolean
    order?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["completedColumn"]>

  export type CompletedColumnSelectScalar = {
    id?: boolean
    title?: boolean
    boardId?: boolean
    userId?: boolean
    order?: boolean
    createdAt?: boolean
  }


  export type $CompletedColumnPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CompletedColumn"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      boardId: string
      userId: string
      order: number
      createdAt: Date
    }, ExtArgs["result"]["completedColumn"]>
    composites: {}
  }

  type CompletedColumnGetPayload<S extends boolean | null | undefined | CompletedColumnDefaultArgs> = $Result.GetResult<Prisma.$CompletedColumnPayload, S>

  type CompletedColumnCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CompletedColumnFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CompletedColumnCountAggregateInputType | true
    }

  export interface CompletedColumnDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CompletedColumn'], meta: { name: 'CompletedColumn' } }
    /**
     * Find zero or one CompletedColumn that matches the filter.
     * @param {CompletedColumnFindUniqueArgs} args - Arguments to find a CompletedColumn
     * @example
     * // Get one CompletedColumn
     * const completedColumn = await prisma.completedColumn.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompletedColumnFindUniqueArgs>(args: SelectSubset<T, CompletedColumnFindUniqueArgs<ExtArgs>>): Prisma__CompletedColumnClient<$Result.GetResult<Prisma.$CompletedColumnPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one CompletedColumn that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CompletedColumnFindUniqueOrThrowArgs} args - Arguments to find a CompletedColumn
     * @example
     * // Get one CompletedColumn
     * const completedColumn = await prisma.completedColumn.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompletedColumnFindUniqueOrThrowArgs>(args: SelectSubset<T, CompletedColumnFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompletedColumnClient<$Result.GetResult<Prisma.$CompletedColumnPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first CompletedColumn that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletedColumnFindFirstArgs} args - Arguments to find a CompletedColumn
     * @example
     * // Get one CompletedColumn
     * const completedColumn = await prisma.completedColumn.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompletedColumnFindFirstArgs>(args?: SelectSubset<T, CompletedColumnFindFirstArgs<ExtArgs>>): Prisma__CompletedColumnClient<$Result.GetResult<Prisma.$CompletedColumnPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first CompletedColumn that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletedColumnFindFirstOrThrowArgs} args - Arguments to find a CompletedColumn
     * @example
     * // Get one CompletedColumn
     * const completedColumn = await prisma.completedColumn.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompletedColumnFindFirstOrThrowArgs>(args?: SelectSubset<T, CompletedColumnFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompletedColumnClient<$Result.GetResult<Prisma.$CompletedColumnPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more CompletedColumns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletedColumnFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CompletedColumns
     * const completedColumns = await prisma.completedColumn.findMany()
     * 
     * // Get first 10 CompletedColumns
     * const completedColumns = await prisma.completedColumn.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const completedColumnWithIdOnly = await prisma.completedColumn.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompletedColumnFindManyArgs>(args?: SelectSubset<T, CompletedColumnFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompletedColumnPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a CompletedColumn.
     * @param {CompletedColumnCreateArgs} args - Arguments to create a CompletedColumn.
     * @example
     * // Create one CompletedColumn
     * const CompletedColumn = await prisma.completedColumn.create({
     *   data: {
     *     // ... data to create a CompletedColumn
     *   }
     * })
     * 
     */
    create<T extends CompletedColumnCreateArgs>(args: SelectSubset<T, CompletedColumnCreateArgs<ExtArgs>>): Prisma__CompletedColumnClient<$Result.GetResult<Prisma.$CompletedColumnPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many CompletedColumns.
     * @param {CompletedColumnCreateManyArgs} args - Arguments to create many CompletedColumns.
     * @example
     * // Create many CompletedColumns
     * const completedColumn = await prisma.completedColumn.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompletedColumnCreateManyArgs>(args?: SelectSubset<T, CompletedColumnCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CompletedColumns and returns the data saved in the database.
     * @param {CompletedColumnCreateManyAndReturnArgs} args - Arguments to create many CompletedColumns.
     * @example
     * // Create many CompletedColumns
     * const completedColumn = await prisma.completedColumn.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CompletedColumns and only return the `id`
     * const completedColumnWithIdOnly = await prisma.completedColumn.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompletedColumnCreateManyAndReturnArgs>(args?: SelectSubset<T, CompletedColumnCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompletedColumnPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a CompletedColumn.
     * @param {CompletedColumnDeleteArgs} args - Arguments to delete one CompletedColumn.
     * @example
     * // Delete one CompletedColumn
     * const CompletedColumn = await prisma.completedColumn.delete({
     *   where: {
     *     // ... filter to delete one CompletedColumn
     *   }
     * })
     * 
     */
    delete<T extends CompletedColumnDeleteArgs>(args: SelectSubset<T, CompletedColumnDeleteArgs<ExtArgs>>): Prisma__CompletedColumnClient<$Result.GetResult<Prisma.$CompletedColumnPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one CompletedColumn.
     * @param {CompletedColumnUpdateArgs} args - Arguments to update one CompletedColumn.
     * @example
     * // Update one CompletedColumn
     * const completedColumn = await prisma.completedColumn.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompletedColumnUpdateArgs>(args: SelectSubset<T, CompletedColumnUpdateArgs<ExtArgs>>): Prisma__CompletedColumnClient<$Result.GetResult<Prisma.$CompletedColumnPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more CompletedColumns.
     * @param {CompletedColumnDeleteManyArgs} args - Arguments to filter CompletedColumns to delete.
     * @example
     * // Delete a few CompletedColumns
     * const { count } = await prisma.completedColumn.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompletedColumnDeleteManyArgs>(args?: SelectSubset<T, CompletedColumnDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompletedColumns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletedColumnUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CompletedColumns
     * const completedColumn = await prisma.completedColumn.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompletedColumnUpdateManyArgs>(args: SelectSubset<T, CompletedColumnUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CompletedColumn.
     * @param {CompletedColumnUpsertArgs} args - Arguments to update or create a CompletedColumn.
     * @example
     * // Update or create a CompletedColumn
     * const completedColumn = await prisma.completedColumn.upsert({
     *   create: {
     *     // ... data to create a CompletedColumn
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CompletedColumn we want to update
     *   }
     * })
     */
    upsert<T extends CompletedColumnUpsertArgs>(args: SelectSubset<T, CompletedColumnUpsertArgs<ExtArgs>>): Prisma__CompletedColumnClient<$Result.GetResult<Prisma.$CompletedColumnPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of CompletedColumns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletedColumnCountArgs} args - Arguments to filter CompletedColumns to count.
     * @example
     * // Count the number of CompletedColumns
     * const count = await prisma.completedColumn.count({
     *   where: {
     *     // ... the filter for the CompletedColumns we want to count
     *   }
     * })
    **/
    count<T extends CompletedColumnCountArgs>(
      args?: Subset<T, CompletedColumnCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompletedColumnCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CompletedColumn.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletedColumnAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompletedColumnAggregateArgs>(args: Subset<T, CompletedColumnAggregateArgs>): Prisma.PrismaPromise<GetCompletedColumnAggregateType<T>>

    /**
     * Group by CompletedColumn.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletedColumnGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CompletedColumnGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompletedColumnGroupByArgs['orderBy'] }
        : { orderBy?: CompletedColumnGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CompletedColumnGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompletedColumnGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CompletedColumn model
   */
  readonly fields: CompletedColumnFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CompletedColumn.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompletedColumnClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CompletedColumn model
   */ 
  interface CompletedColumnFieldRefs {
    readonly id: FieldRef<"CompletedColumn", 'String'>
    readonly title: FieldRef<"CompletedColumn", 'String'>
    readonly boardId: FieldRef<"CompletedColumn", 'String'>
    readonly userId: FieldRef<"CompletedColumn", 'String'>
    readonly order: FieldRef<"CompletedColumn", 'Int'>
    readonly createdAt: FieldRef<"CompletedColumn", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CompletedColumn findUnique
   */
  export type CompletedColumnFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedColumn
     */
    select?: CompletedColumnSelect<ExtArgs> | null
    /**
     * Filter, which CompletedColumn to fetch.
     */
    where: CompletedColumnWhereUniqueInput
  }

  /**
   * CompletedColumn findUniqueOrThrow
   */
  export type CompletedColumnFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedColumn
     */
    select?: CompletedColumnSelect<ExtArgs> | null
    /**
     * Filter, which CompletedColumn to fetch.
     */
    where: CompletedColumnWhereUniqueInput
  }

  /**
   * CompletedColumn findFirst
   */
  export type CompletedColumnFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedColumn
     */
    select?: CompletedColumnSelect<ExtArgs> | null
    /**
     * Filter, which CompletedColumn to fetch.
     */
    where?: CompletedColumnWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompletedColumns to fetch.
     */
    orderBy?: CompletedColumnOrderByWithRelationInput | CompletedColumnOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompletedColumns.
     */
    cursor?: CompletedColumnWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompletedColumns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompletedColumns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompletedColumns.
     */
    distinct?: CompletedColumnScalarFieldEnum | CompletedColumnScalarFieldEnum[]
  }

  /**
   * CompletedColumn findFirstOrThrow
   */
  export type CompletedColumnFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedColumn
     */
    select?: CompletedColumnSelect<ExtArgs> | null
    /**
     * Filter, which CompletedColumn to fetch.
     */
    where?: CompletedColumnWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompletedColumns to fetch.
     */
    orderBy?: CompletedColumnOrderByWithRelationInput | CompletedColumnOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompletedColumns.
     */
    cursor?: CompletedColumnWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompletedColumns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompletedColumns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompletedColumns.
     */
    distinct?: CompletedColumnScalarFieldEnum | CompletedColumnScalarFieldEnum[]
  }

  /**
   * CompletedColumn findMany
   */
  export type CompletedColumnFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedColumn
     */
    select?: CompletedColumnSelect<ExtArgs> | null
    /**
     * Filter, which CompletedColumns to fetch.
     */
    where?: CompletedColumnWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompletedColumns to fetch.
     */
    orderBy?: CompletedColumnOrderByWithRelationInput | CompletedColumnOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CompletedColumns.
     */
    cursor?: CompletedColumnWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompletedColumns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompletedColumns.
     */
    skip?: number
    distinct?: CompletedColumnScalarFieldEnum | CompletedColumnScalarFieldEnum[]
  }

  /**
   * CompletedColumn create
   */
  export type CompletedColumnCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedColumn
     */
    select?: CompletedColumnSelect<ExtArgs> | null
    /**
     * The data needed to create a CompletedColumn.
     */
    data: XOR<CompletedColumnCreateInput, CompletedColumnUncheckedCreateInput>
  }

  /**
   * CompletedColumn createMany
   */
  export type CompletedColumnCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CompletedColumns.
     */
    data: CompletedColumnCreateManyInput | CompletedColumnCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CompletedColumn createManyAndReturn
   */
  export type CompletedColumnCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedColumn
     */
    select?: CompletedColumnSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many CompletedColumns.
     */
    data: CompletedColumnCreateManyInput | CompletedColumnCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CompletedColumn update
   */
  export type CompletedColumnUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedColumn
     */
    select?: CompletedColumnSelect<ExtArgs> | null
    /**
     * The data needed to update a CompletedColumn.
     */
    data: XOR<CompletedColumnUpdateInput, CompletedColumnUncheckedUpdateInput>
    /**
     * Choose, which CompletedColumn to update.
     */
    where: CompletedColumnWhereUniqueInput
  }

  /**
   * CompletedColumn updateMany
   */
  export type CompletedColumnUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CompletedColumns.
     */
    data: XOR<CompletedColumnUpdateManyMutationInput, CompletedColumnUncheckedUpdateManyInput>
    /**
     * Filter which CompletedColumns to update
     */
    where?: CompletedColumnWhereInput
  }

  /**
   * CompletedColumn upsert
   */
  export type CompletedColumnUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedColumn
     */
    select?: CompletedColumnSelect<ExtArgs> | null
    /**
     * The filter to search for the CompletedColumn to update in case it exists.
     */
    where: CompletedColumnWhereUniqueInput
    /**
     * In case the CompletedColumn found by the `where` argument doesn't exist, create a new CompletedColumn with this data.
     */
    create: XOR<CompletedColumnCreateInput, CompletedColumnUncheckedCreateInput>
    /**
     * In case the CompletedColumn was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompletedColumnUpdateInput, CompletedColumnUncheckedUpdateInput>
  }

  /**
   * CompletedColumn delete
   */
  export type CompletedColumnDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedColumn
     */
    select?: CompletedColumnSelect<ExtArgs> | null
    /**
     * Filter which CompletedColumn to delete.
     */
    where: CompletedColumnWhereUniqueInput
  }

  /**
   * CompletedColumn deleteMany
   */
  export type CompletedColumnDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompletedColumns to delete
     */
    where?: CompletedColumnWhereInput
  }

  /**
   * CompletedColumn without action
   */
  export type CompletedColumnDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedColumn
     */
    select?: CompletedColumnSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CompletedTaskScalarFieldEnum: {
    id: 'id',
    content: 'content',
    userId: 'userId',
    boardId: 'boardId',
    columnId: 'columnId',
    originalCardId: 'originalCardId',
    order: 'order',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CompletedTaskScalarFieldEnum = (typeof CompletedTaskScalarFieldEnum)[keyof typeof CompletedTaskScalarFieldEnum]


  export const CompletedColumnScalarFieldEnum: {
    id: 'id',
    title: 'title',
    boardId: 'boardId',
    userId: 'userId',
    order: 'order',
    createdAt: 'createdAt'
  };

  export type CompletedColumnScalarFieldEnum = (typeof CompletedColumnScalarFieldEnum)[keyof typeof CompletedColumnScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type CompletedTaskWhereInput = {
    AND?: CompletedTaskWhereInput | CompletedTaskWhereInput[]
    OR?: CompletedTaskWhereInput[]
    NOT?: CompletedTaskWhereInput | CompletedTaskWhereInput[]
    id?: StringFilter<"CompletedTask"> | string
    content?: StringFilter<"CompletedTask"> | string
    userId?: StringFilter<"CompletedTask"> | string
    boardId?: StringFilter<"CompletedTask"> | string
    columnId?: StringFilter<"CompletedTask"> | string
    originalCardId?: StringFilter<"CompletedTask"> | string
    order?: IntFilter<"CompletedTask"> | number
    createdAt?: DateTimeFilter<"CompletedTask"> | Date | string
    updatedAt?: DateTimeFilter<"CompletedTask"> | Date | string
  }

  export type CompletedTaskOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    userId?: SortOrder
    boardId?: SortOrder
    columnId?: SortOrder
    originalCardId?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompletedTaskWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CompletedTaskWhereInput | CompletedTaskWhereInput[]
    OR?: CompletedTaskWhereInput[]
    NOT?: CompletedTaskWhereInput | CompletedTaskWhereInput[]
    content?: StringFilter<"CompletedTask"> | string
    userId?: StringFilter<"CompletedTask"> | string
    boardId?: StringFilter<"CompletedTask"> | string
    columnId?: StringFilter<"CompletedTask"> | string
    originalCardId?: StringFilter<"CompletedTask"> | string
    order?: IntFilter<"CompletedTask"> | number
    createdAt?: DateTimeFilter<"CompletedTask"> | Date | string
    updatedAt?: DateTimeFilter<"CompletedTask"> | Date | string
  }, "id">

  export type CompletedTaskOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    userId?: SortOrder
    boardId?: SortOrder
    columnId?: SortOrder
    originalCardId?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CompletedTaskCountOrderByAggregateInput
    _avg?: CompletedTaskAvgOrderByAggregateInput
    _max?: CompletedTaskMaxOrderByAggregateInput
    _min?: CompletedTaskMinOrderByAggregateInput
    _sum?: CompletedTaskSumOrderByAggregateInput
  }

  export type CompletedTaskScalarWhereWithAggregatesInput = {
    AND?: CompletedTaskScalarWhereWithAggregatesInput | CompletedTaskScalarWhereWithAggregatesInput[]
    OR?: CompletedTaskScalarWhereWithAggregatesInput[]
    NOT?: CompletedTaskScalarWhereWithAggregatesInput | CompletedTaskScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CompletedTask"> | string
    content?: StringWithAggregatesFilter<"CompletedTask"> | string
    userId?: StringWithAggregatesFilter<"CompletedTask"> | string
    boardId?: StringWithAggregatesFilter<"CompletedTask"> | string
    columnId?: StringWithAggregatesFilter<"CompletedTask"> | string
    originalCardId?: StringWithAggregatesFilter<"CompletedTask"> | string
    order?: IntWithAggregatesFilter<"CompletedTask"> | number
    createdAt?: DateTimeWithAggregatesFilter<"CompletedTask"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CompletedTask"> | Date | string
  }

  export type CompletedColumnWhereInput = {
    AND?: CompletedColumnWhereInput | CompletedColumnWhereInput[]
    OR?: CompletedColumnWhereInput[]
    NOT?: CompletedColumnWhereInput | CompletedColumnWhereInput[]
    id?: StringFilter<"CompletedColumn"> | string
    title?: StringFilter<"CompletedColumn"> | string
    boardId?: StringFilter<"CompletedColumn"> | string
    userId?: StringFilter<"CompletedColumn"> | string
    order?: IntFilter<"CompletedColumn"> | number
    createdAt?: DateTimeFilter<"CompletedColumn"> | Date | string
  }

  export type CompletedColumnOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    boardId?: SortOrder
    userId?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
  }

  export type CompletedColumnWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CompletedColumnWhereInput | CompletedColumnWhereInput[]
    OR?: CompletedColumnWhereInput[]
    NOT?: CompletedColumnWhereInput | CompletedColumnWhereInput[]
    title?: StringFilter<"CompletedColumn"> | string
    boardId?: StringFilter<"CompletedColumn"> | string
    userId?: StringFilter<"CompletedColumn"> | string
    order?: IntFilter<"CompletedColumn"> | number
    createdAt?: DateTimeFilter<"CompletedColumn"> | Date | string
  }, "id">

  export type CompletedColumnOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    boardId?: SortOrder
    userId?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    _count?: CompletedColumnCountOrderByAggregateInput
    _avg?: CompletedColumnAvgOrderByAggregateInput
    _max?: CompletedColumnMaxOrderByAggregateInput
    _min?: CompletedColumnMinOrderByAggregateInput
    _sum?: CompletedColumnSumOrderByAggregateInput
  }

  export type CompletedColumnScalarWhereWithAggregatesInput = {
    AND?: CompletedColumnScalarWhereWithAggregatesInput | CompletedColumnScalarWhereWithAggregatesInput[]
    OR?: CompletedColumnScalarWhereWithAggregatesInput[]
    NOT?: CompletedColumnScalarWhereWithAggregatesInput | CompletedColumnScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CompletedColumn"> | string
    title?: StringWithAggregatesFilter<"CompletedColumn"> | string
    boardId?: StringWithAggregatesFilter<"CompletedColumn"> | string
    userId?: StringWithAggregatesFilter<"CompletedColumn"> | string
    order?: IntWithAggregatesFilter<"CompletedColumn"> | number
    createdAt?: DateTimeWithAggregatesFilter<"CompletedColumn"> | Date | string
  }

  export type CompletedTaskCreateInput = {
    id?: string
    content: string
    userId: string
    boardId: string
    columnId: string
    originalCardId: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompletedTaskUncheckedCreateInput = {
    id?: string
    content: string
    userId: string
    boardId: string
    columnId: string
    originalCardId: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompletedTaskUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    boardId?: StringFieldUpdateOperationsInput | string
    columnId?: StringFieldUpdateOperationsInput | string
    originalCardId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompletedTaskUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    boardId?: StringFieldUpdateOperationsInput | string
    columnId?: StringFieldUpdateOperationsInput | string
    originalCardId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompletedTaskCreateManyInput = {
    id?: string
    content: string
    userId: string
    boardId: string
    columnId: string
    originalCardId: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompletedTaskUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    boardId?: StringFieldUpdateOperationsInput | string
    columnId?: StringFieldUpdateOperationsInput | string
    originalCardId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompletedTaskUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    boardId?: StringFieldUpdateOperationsInput | string
    columnId?: StringFieldUpdateOperationsInput | string
    originalCardId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompletedColumnCreateInput = {
    id?: string
    title: string
    boardId: string
    userId: string
    order?: number
    createdAt?: Date | string
  }

  export type CompletedColumnUncheckedCreateInput = {
    id?: string
    title: string
    boardId: string
    userId: string
    order?: number
    createdAt?: Date | string
  }

  export type CompletedColumnUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    boardId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompletedColumnUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    boardId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompletedColumnCreateManyInput = {
    id?: string
    title: string
    boardId: string
    userId: string
    order?: number
    createdAt?: Date | string
  }

  export type CompletedColumnUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    boardId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompletedColumnUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    boardId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CompletedTaskCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    userId?: SortOrder
    boardId?: SortOrder
    columnId?: SortOrder
    originalCardId?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompletedTaskAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type CompletedTaskMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    userId?: SortOrder
    boardId?: SortOrder
    columnId?: SortOrder
    originalCardId?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompletedTaskMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    userId?: SortOrder
    boardId?: SortOrder
    columnId?: SortOrder
    originalCardId?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompletedTaskSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type CompletedColumnCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    boardId?: SortOrder
    userId?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
  }

  export type CompletedColumnAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type CompletedColumnMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    boardId?: SortOrder
    userId?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
  }

  export type CompletedColumnMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    boardId?: SortOrder
    userId?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
  }

  export type CompletedColumnSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use CompletedTaskDefaultArgs instead
     */
    export type CompletedTaskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CompletedTaskDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CompletedColumnDefaultArgs instead
     */
    export type CompletedColumnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CompletedColumnDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}