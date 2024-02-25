import { get, post } from './HttpProvider';
import featureConstants from './features-constants';

const SERVICE_URLS = {
  // claimsList: 'claim/getclaimlistcompactudt',
  claimId: 'users',
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
const getclaimId = () =>
  get(
    SERVICE_URLS.claimId ,
    {},
    { feature: featureConstants.static },
  );
const apiServices = {
  // getClaimsList,
  userGet,
  getclaimId,
};
export default apiServices;
