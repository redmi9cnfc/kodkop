import { normalizeCompiledVersion } from '../../../../helpers/normalizeCompiledVersion';
import { removeVersionPrefix } from '../../../../helpers/removeVersionPrefix';
import type { StoreType } from '../../../services/store.service';
import type { IRenderSystemInfoRow } from '../partials';

function isUnknownVersion(version?: string | null): boolean {
  return version === 'unknown' || version === _('unknown');
}

export function getKodkopVersionRow(
  diagnosticsSystemInfo: StoreType['diagnosticsSystemInfo'],
): IRenderSystemInfoRow {
  const loading = diagnosticsSystemInfo.loading;
  const unknown = isUnknownVersion(diagnosticsSystemInfo.kodkop_version);
  const hasActualVersion =
    Boolean(diagnosticsSystemInfo.kodkop_latest_version) &&
    !isUnknownVersion(diagnosticsSystemInfo.kodkop_latest_version);
  const version = normalizeCompiledVersion(
    diagnosticsSystemInfo.kodkop_version,
  );
  const isDevVersion = version === 'dev';

  if (loading || unknown || !hasActualVersion || isDevVersion) {
    return {
      key: 'Kodkop',
      value: version,
    };
  }

  if (
    removeVersionPrefix(version) !==
    removeVersionPrefix(diagnosticsSystemInfo.kodkop_latest_version)
  ) {
    return {
      key: 'Kodkop',
      value: version,
      tag: {
        label: _('Outdated'),
        kind: 'warning',
      },
    };
  }

  return {
    key: 'Kodkop',
    value: version,
    tag: {
      label: _('Latest'),
      kind: 'success',
    },
  };
}
