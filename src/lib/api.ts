interface languageType {
  id: number;
  language: string;
  version: string;
}


import { languageList } from "./languageList";

export const fetchLanguage = async (): Promise<languageType[]> => {
  try {
    const res = await fetch('https://ce.judge0.com/languages');
    const data = await res.json();

    const latestVersions: any = {};

    data.forEach((item: any) => {
      const match = item.name.match(/^([^(]+)\s*\((.+)\)$/);
      if (!match) return;

      const langRaw = match[1].trim().toLowerCase();
      let langKey = langRaw.replace(/\s/g, '');
      if (langKey === 'cpp') langKey = 'c++';

      if (!languageList.includes(langKey)) return;

      const parts = match[2].split(' ');
      const version = parts[parts.length - 1];

      if (
        !latestVersions[langKey] ||
        version > latestVersions[langKey].version
      ) {
        latestVersions[langKey] = {
          language: langKey,
          version: version,
          id: item.id,
        };
      }
    });

    return Object.values(latestVersions);
  } catch (error) {
    console.error(error);
    return [];
  }
};