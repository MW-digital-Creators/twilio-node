/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../base/Page');
import Response = require('../../../http/response');
import V2010 = require('../V2010');
import { AddressList } from './account/address';
import { AddressListInstance } from './account/address';
import { ApplicationList } from './account/application';
import { ApplicationListInstance } from './account/application';
import { AuthorizedConnectAppList } from './account/authorizedConnectApp';
import { AuthorizedConnectAppListInstance } from './account/authorizedConnectApp';
import { AvailablePhoneNumberCountryList } from './account/availablePhoneNumber';
import { AvailablePhoneNumberCountryListInstance } from './account/availablePhoneNumber';
import { BalanceList } from './account/balance';
import { BalanceListInstance } from './account/balance';
import { CallList } from './account/call';
import { CallListInstance } from './account/call';
import { ConferenceList } from './account/conference';
import { ConferenceListInstance } from './account/conference';
import { ConnectAppList } from './account/connectApp';
import { ConnectAppListInstance } from './account/connectApp';
import { IncomingPhoneNumberList } from './account/incomingPhoneNumber';
import { IncomingPhoneNumberListInstance } from './account/incomingPhoneNumber';
import { KeyList } from './account/key';
import { KeyListInstance } from './account/key';
import { MessageList } from './account/message';
import { MessageListInstance } from './account/message';
import { NewKeyList } from './account/newKey';
import { NewKeyListInstance } from './account/newKey';
import { NewSigningKeyList } from './account/newSigningKey';
import { NewSigningKeyListInstance } from './account/newSigningKey';
import { NotificationList } from './account/notification';
import { NotificationListInstance } from './account/notification';
import { OutgoingCallerIdList } from './account/outgoingCallerId';
import { OutgoingCallerIdListInstance } from './account/outgoingCallerId';
import { QueueList } from './account/queue';
import { QueueListInstance } from './account/queue';
import { RecordingList } from './account/recording';
import { RecordingListInstance } from './account/recording';
import { SerializableClass } from '../../../interfaces';
import { ShortCodeList } from './account/shortCode';
import { ShortCodeListInstance } from './account/shortCode';
import { SigningKeyList } from './account/signingKey';
import { SigningKeyListInstance } from './account/signingKey';
import { SipList } from './account/sip';
import { SipListInstance } from './account/sip';
import { TokenList } from './account/token';
import { TokenListInstance } from './account/token';
import { TranscriptionList } from './account/transcription';
import { TranscriptionListInstance } from './account/transcription';
import { UsageList } from './account/usage';
import { UsageListInstance } from './account/usage';
import { ValidationRequestList } from './account/validationRequest';
import { ValidationRequestListInstance } from './account/validationRequest';

type AccountStatus = 'active'|'suspended'|'closed';

type AccountType = 'Trial'|'Full';

/**
 * @description Initialize the AccountList
 *
 * @param version - Version of the resource
 */
declare function AccountList(version: V2010): AccountListInstance;

/**
 * Options to pass to update
 *
 * @property friendlyName - FriendlyName to update
 * @property status - Status to update the Account with
 */
interface AccountInstanceUpdateOptions {
  friendlyName?: string;
  status?: AccountStatus;
}

interface AccountListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): AccountContext;
  /**
   * create a AccountInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts?: AccountListInstanceCreateOptions, callback?: (error: Error | null, item: AccountInstance) => any): Promise<AccountInstance>;
  /**
   * Streams AccountInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Function to process each record
   */
  each(opts?: AccountListInstanceEachOptions, callback?: (item: AccountInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a account
   *
   * @param sid - Fetch by unique Account Sid
   */
  get(sid: string): AccountContext;
  /**
   * Retrieve a single target page of AccountInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: AccountPage) => any): Promise<AccountPage>;
  /**
   * Lists AccountInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: AccountListInstanceOptions, callback?: (error: Error | null, items: AccountInstance[]) => any): Promise<AccountInstance[]>;
  /**
   * Retrieve a single page of AccountInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: AccountListInstancePageOptions, callback?: (error: Error | null, items: AccountPage) => any): Promise<AccountPage>;
}

/**
 * Options to pass to create
 *
 * @property friendlyName - A human readable description of the account
 */
interface AccountListInstanceCreateOptions {
  friendlyName?: string;
}

/**
 * Options to pass to each
 *
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property done - Function to be called upon completion of streaming
 * @property friendlyName - FriendlyName to filter on
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         each() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no pageSize is defined but a limit is defined,
 *                         each() will attempt to read the limit with the most efficient
 *                         page size, i.e. min(limit, 1000)
 * @property status - Status to filter on
 */
interface AccountListInstanceEachOptions {
  callback?: (item: AccountInstance, done: (err?: Error) => void) => void;
  done?: Function;
  friendlyName?: string;
  limit?: number;
  pageSize?: number;
  status?: AccountStatus;
}

/**
 * Options to pass to list
 *
 * @property friendlyName - FriendlyName to filter on
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no page_size is defined but a limit is defined,
 *                         list() will attempt to read the limit with the most
 *                         efficient page size, i.e. min(limit, 1000)
 * @property status - Status to filter on
 */
interface AccountListInstanceOptions {
  friendlyName?: string;
  limit?: number;
  pageSize?: number;
  status?: AccountStatus;
}

/**
 * Options to pass to page
 *
 * @property friendlyName - FriendlyName to filter on
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 * @property status - Status to filter on
 */
interface AccountListInstancePageOptions {
  friendlyName?: string;
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
  status?: AccountStatus;
}

interface AccountPayload extends AccountResource, Page.TwilioResponsePayload {
}

interface AccountResource {
  auth_token: string;
  date_created: Date;
  date_updated: Date;
  friendly_name: string;
  owner_account_sid: string;
  sid: string;
  status: AccountStatus;
  subresource_uris: string;
  type: AccountType;
  uri: string;
}

interface AccountSolution {
}


declare class AccountContext {
  /**
   * Initialize the AccountContext
   *
   * @property addresses - addresses resource
   * @property applications - applications resource
   * @property authorizedConnectApps - authorizedConnectApps resource
   * @property availablePhoneNumbers - availablePhoneNumbers resource
   * @property balance - balance resource
   * @property calls - calls resource
   * @property conferences - conferences resource
   * @property connectApps - connectApps resource
   * @property incomingPhoneNumbers - incomingPhoneNumbers resource
   * @property keys - keys resource
   * @property messages - messages resource
   * @property newKeys - newKeys resource
   * @property newSigningKeys - newSigningKeys resource
   * @property notifications - notifications resource
   * @property outgoingCallerIds - outgoingCallerIds resource
   * @property queues - queues resource
   * @property recordings - recordings resource
   * @property signingKeys - signingKeys resource
   * @property sip - sip resource
   * @property shortCodes - shortCodes resource
   * @property tokens - tokens resource
   * @property transcriptions - transcriptions resource
   * @property usage - usage resource
   * @property validationRequests - validationRequests resource
   *
   * @param version - Version of the resource
   * @param sid - Fetch by unique Account Sid
   */
  constructor(version: V2010, sid: string);

  addresses: AddressListInstance;
  applications: ApplicationListInstance;
  authorizedConnectApps: AuthorizedConnectAppListInstance;
  availablePhoneNumbers: AvailablePhoneNumberCountryListInstance;
  balance: BalanceListInstance;
  calls: CallListInstance;
  conferences: ConferenceListInstance;
  connectApps: ConnectAppListInstance;
  /**
   * fetch a AccountInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: AccountInstance) => any): Promise<AccountInstance>;
  incomingPhoneNumbers: IncomingPhoneNumberListInstance;
  keys: KeyListInstance;
  messages: MessageListInstance;
  newKeys: NewKeyListInstance;
  newSigningKeys: NewSigningKeyListInstance;
  notifications: NotificationListInstance;
  outgoingCallerIds: OutgoingCallerIdListInstance;
  queues: QueueListInstance;
  recordings: RecordingListInstance;
  shortCodes: ShortCodeListInstance;
  signingKeys: SigningKeyListInstance;
  sip: SipListInstance;
  tokens: TokenListInstance;
  transcriptions: TranscriptionListInstance;
  /**
   * update a AccountInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: AccountInstanceUpdateOptions, callback?: (error: Error | null, items: AccountInstance) => any): Promise<AccountInstance>;
  usage: UsageListInstance;
  validationRequests: ValidationRequestListInstance;
}


declare class AccountInstance extends SerializableClass {
  /**
   * Initialize the AccountContext
   *
   * @property authToken - The authorization token for this account
   * @property dateCreated - The date this account was created
   * @property dateUpdated - The date this account was last updated
   * @property friendlyName - A human readable description of this account
   * @property ownerAccountSid - The unique 34 character id representing the parent of this account
   * @property sid - A 34 character string that uniquely identifies this resource.
   * @property status - The status of this account
   * @property subresourceUris - Account Instance Subresources
   * @property type - The type of this account
   * @property uri - The URI for this resource, relative to `https://api.twilio.com`
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - Fetch by unique Account Sid
   */
  constructor(version: V2010, payload: AccountPayload, sid: string);

  private _proxy: AccountContext;
  /**
   * Access the addresses
   */
  addresses(): AddressListInstance;
  /**
   * Access the applications
   */
  applications(): ApplicationListInstance;
  authToken: string;
  /**
   * Access the authorizedConnectApps
   */
  authorizedConnectApps(): AuthorizedConnectAppListInstance;
  /**
   * Access the availablePhoneNumbers
   */
  availablePhoneNumbers(): AvailablePhoneNumberCountryListInstance;
  /**
   * Access the balance
   */
  balance(): BalanceListInstance;
  /**
   * Access the calls
   */
  calls(): CallListInstance;
  /**
   * Access the conferences
   */
  conferences(): ConferenceListInstance;
  /**
   * Access the connectApps
   */
  connectApps(): ConnectAppListInstance;
  dateCreated: Date;
  dateUpdated: Date;
  /**
   * fetch a AccountInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: AccountInstance) => any): void;
  friendlyName: string;
  /**
   * Access the incomingPhoneNumbers
   */
  incomingPhoneNumbers(): IncomingPhoneNumberListInstance;
  /**
   * Access the keys
   */
  keys(): KeyListInstance;
  /**
   * Access the messages
   */
  messages(): MessageListInstance;
  /**
   * Access the newKeys
   */
  newKeys(): NewKeyListInstance;
  /**
   * Access the newSigningKeys
   */
  newSigningKeys(): NewSigningKeyListInstance;
  /**
   * Access the notifications
   */
  notifications(): NotificationListInstance;
  /**
   * Access the outgoingCallerIds
   */
  outgoingCallerIds(): OutgoingCallerIdListInstance;
  ownerAccountSid: string;
  /**
   * Access the queues
   */
  queues(): QueueListInstance;
  /**
   * Access the recordings
   */
  recordings(): RecordingListInstance;
  /**
   * Access the shortCodes
   */
  shortCodes(): ShortCodeListInstance;
  sid: string;
  /**
   * Access the signingKeys
   */
  signingKeys(): SigningKeyListInstance;
  /**
   * Access the sip
   */
  sip(): SipListInstance;
  status: AccountStatus;
  subresourceUris: string;
  /**
   * Produce a plain JSON object version of the AccountInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON(): any;
  /**
   * Access the tokens
   */
  tokens(): TokenListInstance;
  /**
   * Access the transcriptions
   */
  transcriptions(): TranscriptionListInstance;
  type: AccountType;
  /**
   * update a AccountInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: AccountInstanceUpdateOptions, callback?: (error: Error | null, items: AccountInstance) => any): void;
  uri: string;
  /**
   * Access the usage
   */
  usage(): UsageListInstance;
  /**
   * Access the validationRequests
   */
  validationRequests(): ValidationRequestListInstance;
}


declare class AccountPage extends Page<V2010, AccountPayload, AccountResource, AccountInstance> {
  /**
   * Initialize the AccountPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V2010, response: Response<string>, solution: AccountSolution);

  /**
   * Build an instance of AccountInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: AccountPayload): AccountInstance;
}

export { AccountContext, AccountInstance, AccountList, AccountListInstance, AccountListInstanceCreateOptions, AccountListInstanceEachOptions, AccountListInstanceOptions, AccountListInstancePageOptions, AccountPage, AccountPayload, AccountResource, AccountSolution }