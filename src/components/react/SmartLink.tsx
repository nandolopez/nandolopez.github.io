/**
 * Necessary elements:
 * - @HTML Link with onClick to function with props
 * - - @onClick Link
 *        go to smart link if after a couple of seconds fails due the app is not available
 *        Go to link
 */

import type { ISocialMedia } from "@/interfaces/ISocialMedia";

const SmartLink = (props: ISocialMedia) => {
  // Text of search input
  const { link, smartlink, alt, icon, mobilelink } = props;

  const onClickLink = () => {
    
    const regex =
      /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    const isMobile = navigator.userAgent.search(regex) >=0;

    try {
        window.location.href = isMobile ? smartlink :link;
    } catch (error) {
        window.location.href = mobilelink ? mobilelink : link
    }finally{
        window.location.href = link        
    }
  };

  return (
    <a
      href="#"
      onClick={onClickLink}
      className="flex items-center flex-col gap-4 h-full justify-center md:justify-between p-8 text-center w-full "
    >
      <img src={icon} alt={alt} className="w-12 md:w-20 md:m-auto" />
      <span className="text-2xl my-auto md:mb-4">{alt}</span>
    </a>
  );
};

export default SmartLink;
