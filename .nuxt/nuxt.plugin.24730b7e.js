/* eslint-disable */
export default (ctx) => {
  const options = {"enabled":false,"invalidation":{"endpoint":"\u002Fcache-invalidate","key":undefined,"handlers":["@vue-storefront\u002Fcache\u002FdefaultHandler"]},"driver":["@vue-storefront\u002Fredis-cache",{"defaultTimeout":86400,"redis":{"keyPrefix":"","host":"127.0.0.1","port":"6379"}}]};

  ctx.req.$vsfCache = {
    ...options,
    tagsSet: new Set()
  };
}
