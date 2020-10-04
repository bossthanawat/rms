export interface IUser {
  id: string;
  email: string;
  token: string;
  authen: string;
}

export interface ILoadcurrent {
  checkinLocation?: string;
  checkoutLocation?: string;
  checkoutType?: string;
  dateEnd?: string;
  dateStart?: string;
  device?: string;
  id?: string;
  localTrxCheckinId?: string;
  localTrxCheckoutId?: string;
  timeWork: string;
  userId?: string;
}

export interface ILoadcurrentRMS {
  checkin_location: string
  checkout_location: string
  checkout_type: string
  date_end: string
  date_start: string
  device: string
  id: string
  local_trx_checkin_id: string
  local_trx_checkout_id: string
  time_work: string
  user_id: string
}

interface ILonLat {
  lon:string;
  lat:string
}

interface IResSendLocation {
  status:number,
  actions:string
}