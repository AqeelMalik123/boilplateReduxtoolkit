import { get, post } from './HttpProvider';
import featureConstants from './features-constants';

const SERVICE_URLS = {
  // claimsList: 'claim/getclaimlistcompactudt',
  userlist: 'users',
  username:"users/"
};
const userGet = (data) =>
  get(
    SERVICE_URLS.username + `${data}`,
    {},
    { feature: featureConstants.static },
  );
// const getClaimsList = (data) =>
//   post(SERVICE_URLS.claimsList, data, { feature: featureConstants.static });
const userlist = () =>
  get(
    SERVICE_URLS.userlist ,
    {},
    { feature: featureConstants.static },
  );
const apiServices = {
  // getClaimsList,
  userGet,
  userlist,
};
export default apiServices;
