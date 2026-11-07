# Kodkop

Kodkop is an independently installable fork of Podkop. The runtime identity is `kodkop`:

- UCI configuration: `/etc/config/kodkop`
- init service: `/etc/init.d/kodkop`
- executable: `/usr/bin/kodkop`
- libraries: `/usr/lib/kodkop/`
- LuCI package/menu/view: `luci-app-kodkop`, `admin/services/kodkop`

The fork keeps its own nftables table, routing table, marks and temporary files so it can coexist with Podkop. It retains the upstream project's license; see `LICENSE` and `TRADEMARK.md`.

## Multiple routes

Create a separate UCI `config section` for each route/proxy. Each section can have its own `community_lists`, domain lists and subnet lists. For example, make one proxy section the default route and a second proxy section with `community_lists 'youtube'` to send the YouTube service list through the second server. Do not assign the same service list to both sections. The actual service classification depends on the maintained community rulesets.

Example (replace the proxy URLs with your own):

```uci
config section 'finland'
        option connection_type 'proxy'
        option proxy_config_type 'url'
        option proxy_string 'vless://...'
        # No service lists: use this as the general/default proxy.

config section 'russia_youtube'
        option connection_type 'proxy'
        option proxy_config_type 'url'
        option proxy_string 'vless://...'
        list community_lists 'youtube'
```

## Subscription support status

The current engine accepts individual sing-box-compatible proxy URLs, selector/urltest link lists, and raw sing-box outbound JSON. It does **not** yet implement a generic subscription importer for Hiddify/Happ-only subscription formats. A subscription URL is not interchangeable with a VLESS/SS/Trojan node URL: the remote payload may be base64, provider-specific JSON, encrypted, or require client-side conversion. Do not paste a subscription URL into the single-node URL field expecting it to work. Generic subscription ingestion and dashboard subscription management remain planned work.

## Build

Build `kodkop` and `luci-app-kodkop` with the same OpenWrt SDK/feeds used for Podkop. Install both Kodkop packages separately; do not install upstream packages over them. The packages use distinct package names and filesystem/config/service identities.
