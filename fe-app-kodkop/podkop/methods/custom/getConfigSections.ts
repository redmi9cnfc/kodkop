import { Kodkop } from '../../types';

export async function getConfigSections(): Promise<Kodkop.ConfigSection[]> {
  return uci.load('kodkop').then(() => uci.sections('kodkop'));
}
