import { OFFER_LOGO_URL } from "../../../utils/constants";

const ResOffers = (props) => {
  const {
    sla: { deliveryTime },
    costForTwoMessage,
  } = props?.resInfo;

  const resOffers = props?.resOffers;
  return (
    <div className="my-4 mx-0 p-4 flex flex-col bg-white rounded-lg shadow-md shadow-stone-200 res-offers-wrapper">
      <div className="row1">
        <h2 className="mr-4 inline text-sm font-bold delivery-time">
          <i className="fa fa-clock-o"></i> {deliveryTime} MINS
        </h2>
        <h2 className="mr-4 inline text-sm font-bold cost-for-two">
          {" " + costForTwoMessage}
        </h2>
      </div>
      <div className="mt-4 flex items-center w-full overflow-auto scroll-smooth row2">
        {resOffers.map((offer) => {
          const { offerIds, offerLogo, header, couponCode, description } =
            offer?.info;
          return (
            <div
              key={offerIds[0]}
              className="mr-[0.6rem] p-[0.4rem] min-w-[155px] border border-stone-300 rounded-lg cursor-pointer offer-wrapper"
            >
              <div className="mb-[0.3rem] flex items-center offer-header-wrapper">
                {offerLogo != undefined ? (
                  <img
                    className="h-6 w-6 offer-logo"
                    src={OFFER_LOGO_URL + offerLogo}
                  ></img>
                ) : (
                  ""
                )}
                <h3 className="font-bold text-[0.7rem] text-stone-500 offer-header">
                  &nbsp;&nbsp;&nbsp;{header}
                </h3>
              </div>
              <div className="offer-footer-wrapper">
                <h5 className="m-0 font-semibold text-[0.5rem] text-stone-500 text-center offer-footer">
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
