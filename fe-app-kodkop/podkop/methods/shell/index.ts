import { callBaseMethod } from './callBaseMethod';
import { ClashAPI, Kodkop } from '../../types';

export const KodkopShellMethods = {
  checkDNSAvailable: async () =>
    callBaseMethod<Kodkop.DnsCheckResult>(
      Kodkop.AvailableMethods.CHECK_DNS_AVAILABLE,
    ),
  checkFakeIP: async () =>
    callBaseMethod<Kodkop.FakeIPCheckResult>(
      Kodkop.AvailableMethods.CHECK_FAKEIP,
    ),
  checkNftRules: async () =>
    callBaseMethod<Kodkop.NftRulesCheckResult>(
      Kodkop.AvailableMethods.CHECK_NFT_RULES,
    ),
  getStatus: async () =>
    callBaseMethod<Kodkop.GetStatus>(Kodkop.AvailableMethods.GET_STATUS),
  checkSingBox: async () =>
    callBaseMethod<Kodkop.SingBoxCheckResult>(
      Kodkop.AvailableMethods.CHECK_SING_BOX,
    ),
  getSingBoxStatus: async () =>
    callBaseMethod<Kodkop.GetSingBoxStatus>(
      Kodkop.AvailableMethods.GET_SING_BOX_STATUS,
    ),
  getClashApiProxies: async () =>
    callBaseMethod<ClashAPI.Proxies>(Kodkop.AvailableMethods.CLASH_API, [
      Kodkop.AvailableClashAPIMethods.GET_PROXIES,
    ]),
  getClashApiProxyLatency: async (tag: string) =>
    callBaseMethod<Kodkop.GetClashApiProxyLatency>(
      Kodkop.AvailableMethods.CLASH_API,
      [Kodkop.AvailableClashAPIMethods.GET_PROXY_LATENCY, tag, '5000'],
    ),
  getClashApiGroupLatency: async (tag: string) =>
    callBaseMethod<Kodkop.GetClashApiGroupLatency>(
      Kodkop.AvailableMethods.CLASH_API,
      [Kodkop.AvailableClashAPIMethods.GET_GROUP_LATENCY, tag, '10000'],
    ),
  setClashApiGroupProxy: async (group: string, proxy: string) =>
    callBaseMethod<unknown>(Kodkop.AvailableMethods.CLASH_API, [
      Kodkop.AvailableClashAPIMethods.SET_GROUP_PROXY,
      group,
      proxy,
    ]),
  restart: async () =>
    callBaseMethod<unknown>(
      Kodkop.AvailableMethods.RESTART,
      [],
      '/etc/init.d/kodkop',
    ),
  start: async () =>
    callBaseMethod<unknown>(
      Kodkop.AvailableMethods.START,
      [],
      '/etc/init.d/kodkop',
    ),
  stop: async () =>
    callBaseMethod<unknown>(
      Kodkop.AvailableMethods.STOP,
      [],
      '/etc/init.d/kodkop',
    ),
  enable: async () =>
    callBaseMethod<unknown>(
      Kodkop.AvailableMethods.ENABLE,
      [],
      '/etc/init.d/kodkop',
    ),
  disable: async () =>
    callBaseMethod<unknown>(
      Kodkop.AvailableMethods.DISABLE,
      [],
      '/etc/init.d/kodkop',
    ),
  globalCheck: async () =>
    callBaseMethod<unknown>(Kodkop.AvailableMethods.GLOBAL_CHECK),
  showSingBoxConfig: async () =>
    callBaseMethod<unknown>(Kodkop.AvailableMethods.SHOW_SING_BOX_CONFIG),
  checkLogs: async () =>
    callBaseMethod<unknown>(Kodkop.AvailableMethods.CHECK_LOGS),
  getSystemInfo: async () =>
    callBaseMethod<Kodkop.GetSystemInfo>(
      Kodkop.AvailableMethods.GET_SYSTEM_INFO,
    ),
  getSingBoxFeatures: async () =>
    callBaseMethod<string[]>(Kodkop.AvailableMethods.GET_SING_BOX_FEATURES),
};
