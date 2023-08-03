import { OFFER_LOGO_URL } from "../../../utils/constants";

const ResOffers = (props) => {
  const {
    sla: { deliveryTime },
    costForTwoMessage,
  } = props?.resInfo;

  const resOffers = props?.resOffers;
  return (
    <div className="res-offers-wrapper">
      <div className="row1">
        <h2 className="delivery-time">
          <i className="fa fa-clock-o"></i> {deliveryTime} MINS
        </h2>
        <h2 className="cost-for-two">{" " + costForTwoMessage}</h2>
      </div>
      <div className="row2">
        {resOffers.map((offer) => {
          const { offerIds, offerLogo, header, couponCode, description } =
            offer?.info;
          return (
            <div key={offerIds[0]} className="offer-wrapper">
              <div className="offer-header-wrapper">
                {offerLogo != undefined ? (
                  <img
                    className="offer-logo"
                    src={OFFER_LOGO_URL + offerLogo}
                  ></img>
                ) : (
                  ""
                )}
                <h3 className="offer-header">&nbsp;&nbsp;&nbsp;{header}</h3>
              </div>
              <div className="offer-footer-wrapper">
                <h5 className="offer-footer">
                  {couponCode} | {description}
                </h5>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ResOffers;
