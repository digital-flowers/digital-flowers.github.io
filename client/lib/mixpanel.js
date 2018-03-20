// mixpanel header script
(function (e, a) {
  if (!a.__SV) {
    let b = window;
    try {
      let c, l, i, j = b.location, g = j.hash;
      c = function (a, b) {
        return (l = a.match(RegExp(b + "=([^&]*)"))) ? l[1] : null
      };
      g && c(g, "state") && (i = JSON.parse(decodeURIComponent(c(g, "state"))), "mpeditor" === i.action && (b.sessionStorage.setItem("_mpcehash", g), history.replaceState(i.desiredHash || "", e.title, j.pathname + j.search)))
    } catch (m) {
    }
    let k, h;
    window.mixpanel = a;
    a._i = [];
    a.init = function (b, c, f) {
      function e(b, a) {
        let c = a.split(".");
        2 == c.length && (b = b[c[0]], a = c[1]);
        b[a] = function () {
          b.push([a].concat(Array.prototype.slice.call(arguments,
            0)))
        }
      }

      let d = a;
      "undefined" !== typeof f ? d = a[f] = [] : f = "mixpanel";
      d.people = d.people || [];
      d.toString = function (b) {
        let a = "mixpanel";
        "mixpanel" !== f && (a += "." + f);
        b || (a += " (stub)");
        return a
      };
      d.people.toString = function () {
        return d.toString(1) + ".people (stub)"
      };
      k = "disable time_event track track_pageview track_links track_forms register register_once alias unregister identify name_tag set_config reset people.set people.set_once people.increment people.append people.union people.track_charge people.clear_charges people.delete_user".split(" ");
      for (h = 0; h < k.length; h++) e(d, k[h]);
      a._i.push([b, c, f])
    };
    a.__SV = 1.2;
    b = e.createElement("script");
    b.type = "text/javascript";
    b.async = !0;
    b.src = "undefined" !== typeof MIXPANEL_CUSTOM_LIB_URL ? MIXPANEL_CUSTOM_LIB_URL : "file:" === e.location.protocol && "//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js".match(/^\/\//) ? "https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js" : "//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js";
    c = e.getElementsByTagName("script")[0];
    c.parentNode.insertBefore(b, c)
  }
})(document, window.mixpanel || []);

let logger = false;
/**
 * init mixpanel
 * @param token
 * @param logging boolean or function to handle logging
 */
export const init = (token, logging = false) => {
  logger = logging ? (typeof logging === "function" ? logging : console.log.bind(console)) : false;
  if (window.mixpanel) {
    logger && logger("mixpanel init", token);
    window.mixpanel.init(token);
  }
};

/**
 * track an event
 * @param name
 * @param props
 * @param callback
 */
export const track = (name, props, callback) => {
  if (window.mixpanel) {
    logger && logger("mixpanel.track", name, {...props});
    window.mixpanel.track(name, {...props}, callback);
  }
};

/**
 * track link
 * @param name
 * @param props
 * @param delegate
 * @param callback
 */
export const trackLink = (name, props, delegate, callback) => evt => {
  if (delegate) {
    const $a = $(evt.currentTarget);
    const link = $a && $a.length ? $a.attr("href") : "";
    const onDone = callback ? (() => callback(evt)) : (() => window.location = link);
    const timeoutId = setTimeout(onDone, 500);
    track(name, props, () => {
      clearTimeout(timeoutId);
      onDone();
    });
    evt.preventDefault();
    return false;
  } else {
    track(name, props, callback ? (() => callback(evt)) : null);
  }
};

/**
 * identify user id
 * @param id
 * @param props
 * @param isNew
 */
export const identifyUser = ({id, ...props}, isNew = false) => {
  if (window.mixpanel) {
    if (isNew) {
      logger && logger("mixpanel.alias", id);
      window.mixpanel.alias(id);
      props["$created"] = new Date();
    } else {
      logger && logger("mixpanel.identify", id);
      window.mixpanel.identify(id);
    }
    updateUser({id, ...props});
  }
};


/**
 * identify user id
 * @param props
 */
export const updateUser = props => {
  if (window.mixpanel) {
    logger && logger("mixpanel.people.set", {...props});
    window.mixpanel.people.set({...props});
  }
};

/**
 * get mixpanel user fields from record based on {originalName:New Name} map
 * @param fieldsNames originalName:New Name map
 * @param profileAsRecord
 */
export const getUserFromRecord = (fieldsNames, profileAsRecord) => Object.keys(fieldsNames).reduce((a, b) => {
  const value = profileAsRecord.getIn(b.split("."));
  if (value) {
    a[fieldsNames[b]] = value;
  }
  return a;
}, {});
