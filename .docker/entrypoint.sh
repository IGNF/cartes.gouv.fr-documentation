#!/bin/sh
set -eu

: "${IAM_URL:?Missing required env var IAM_URL}"
: "${IAM_REALM:?Missing required env var IAM_REALM}"
: "${IAM_CLIENT_ID:?Missing required env var IAM_CLIENT_ID}"
: "${geocaptcha_enabled:?Missing required env var geocaptcha_enabled}"

case "$geocaptcha_enabled" in
    true|false) ;;
    *)
        echo >&2 "ERROR: geocaptcha_enabled must be 'true' or 'false'"
        exit 1
        ;;
esac

if [ "$geocaptcha_enabled" = "true" ]; then
    : "${geocaptcha_url:?Missing required env var geocaptcha_url when GeoCaptcha is enabled}"
    : "${client_geocaptcha_id:?Missing required env var client_geocaptcha_id when GeoCaptcha is enabled}"
fi

if [ ! -w /tmp ]; then
    echo >&2 "ERROR: /tmp is not writable; mount an emptyDir/tmpfs at /tmp"
    exit 1
fi

# Minimal JS string escaping for values interpolated inside double quotes.
escape_js_string() {
  printf '%s' "$1" \
    | sed -e 's/\\/\\\\/g' -e 's/"/\\"/g'
}

iam_url_escaped="$(escape_js_string "$IAM_URL")"
iam_realm_escaped="$(escape_js_string "$IAM_REALM")"
iam_client_id_escaped="$(escape_js_string "$IAM_CLIENT_ID")"
geocaptcha_url_escaped="$(escape_js_string "${geocaptcha_url:-}")"
client_geocaptcha_id_escaped="$(escape_js_string "${client_geocaptcha_id:-}")"

cat > /tmp/env.js <<EOF
// Generated at container startup. Do not edit.
(() => {
    window.__CARTESGOUVFR_DOCS_ENV__ = {
        iamUrl: "${iam_url_escaped}",
        iamRealm: "${iam_realm_escaped}",
        iamClientId: "${iam_client_id_escaped}",
        geocaptchaEnabled: ${geocaptcha_enabled},
        geocaptchaUrl: "${geocaptcha_url_escaped}",
        clientGeocaptchaId: "${client_geocaptcha_id_escaped}",
    };
    Object.freeze(window.__CARTESGOUVFR_DOCS_ENV__);
    Object.defineProperty(window, '__CARTESGOUVFR_DOCS_ENV__', { configurable: false, writable: false });
})();
EOF

exec "$@"
