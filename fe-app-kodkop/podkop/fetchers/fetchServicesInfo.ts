import { KodkopShellMethods } from '../methods';
import { store } from '../services';

export async function fetchServicesInfo() {
  const [kodkop, singbox] = await Promise.all([
    KodkopShellMethods.getStatus(),
    KodkopShellMethods.getSingBoxStatus(),
  ]);

  if (!kodkop.success || !singbox.success) {
    store.set({
      servicesInfoWidget: {
        loading: false,
        failed: true,
        data: { singbox: 0, kodkop: 0 },
      },
    });
  }

  if (kodkop.success && singbox.success) {
    store.set({
      servicesInfoWidget: {
        loading: false,
        failed: false,
        data: { singbox: singbox.data.running, kodkop: kodkop.data.enabled },
      },
    });
  }
}
