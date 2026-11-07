include $(TOPDIR)/rules.mk

PKG_NAME:=kodkop

PKG_VERSION := $(if $(PODKOP_VERSION),$(PODKOP_VERSION),0.$(shell date +%d%m%Y))

PKG_RELEASE:=1

PKG_MAINTAINER:=Kodkop contributors
PKG_LICENSE:=GPL-2.0-or-later

include $(INCLUDE_DIR)/package.mk

define Package/kodkop
	SECTION:=net
	CATEGORY:=Network
	DEPENDS:=+sing-box +curl +jq +kmod-nft-tproxy +coreutils-base64 +bind-dig
	CONFLICTS:=https-dns-proxy nextdns luci-app-passwall luci-app-passwall2
	TITLE:=Domain routing app
	URL:=https://podkop.net
	PKGARCH:=all
endef

define Package/kodkop/description
	Domain routing. Use of VLESS, Shadowsocks technologies
endef

define Build/Configure
endef

define Build/Compile
endef

define Package/kodkop/prerm
#!/bin/sh

grep -q "106 kodkop" /etc/iproute2/rt_tables && sed -i "/106 kodkop/d" /etc/iproute2/rt_tables

/etc/init.d/kodkop stop

exit 0
endef

define Package/kodkop/conffiles
/etc/config/kodkop
endef

define Package/kodkop/install
	$(INSTALL_DIR) $(1)/etc/init.d
	$(INSTALL_BIN) ./files/etc/init.d/kodkop $(1)/etc/init.d/kodkop

	$(INSTALL_DIR) $(1)/etc/config
	$(INSTALL_CONF) ./files/etc/config/kodkop $(1)/etc/config/kodkop

	$(INSTALL_DIR) $(1)/usr/bin
	$(INSTALL_BIN) ./files/usr/bin/kodkop $(1)/usr/bin/kodkop

	$(INSTALL_DIR) $(1)/usr/lib/kodkop
	$(CP) ./files/usr/lib/* $(1)/usr/lib/kodkop/

	sed -i -e 's/__COMPILED_VERSION_VARIABLE__/$(PKG_VERSION)/g' $(1)/usr/lib/kodkop/constants.sh
endef

$(eval $(call BuildPackage,kodkop))
