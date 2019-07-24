# WDP Projekt Zespołowy

## Opis projektu

Projekt jest przykładową stroną sklepu z meblami zakodowaną z darmowego szablonu PSD, w celu nauki kodowania stron WWW.

## Demo

Aktualny stan prac można śledzić pod adresem:
[Demo projektu - aktualny stan](https://loving-goldwasser-86b571.netlify.com/?#)

## Inicjacja projektu

Po sklonowaniu projektu, zainstaluj wymagane paczki komendą `npm install`.

Teraz możesz zacząć pracę, korzystając z przygotowanych zadania `npm run watch`.

Wszystkie potrzebne do pracy pliki źródłowe znajdują się w folderze `src/`.

## NPM Scripts

Dostępne są 3 główne skrypty przyspieszające pracę:

- `build`: na bazie plików z folderu `src` buduje project w folderze `dist`
- `watch`: odpala `browser-sync`, obserwuje zmiany w folderze `src` i przebudowuje projekt
- `code-quality`: skrypt dokonuje automatycznego formatowania plików w folderze `src/`
  zgodnie z przyjętą konwencją formatowania kodu i sprawdza błędy w JS.

## Git Hooks

Projekt korzysta z Git Hooks - możliwości uruchamiania skryptów w reakcji na wybrane zdarzenia programu Git.

Za każdym razem gdy wykonasz komendę `git commit` zostanie uruchomiony skrypt `code-quality`
dla plików, które zostały wybrane do za-commit'owania.

## Konwencje i dobre praktyki

1. Wszytskie pliki wykorzystywane do edycji strony umieszczone są w serwisie GitHub pod adresem: [Repozytorium projektu](https://github.com/JayFromEsumo/project-wdp-1906-04).

Odpowiednio pliki:

- CSS w folderze sass
- HTML w folderze partials
- skrypty w folderze scripts
- obrazki w folderze images

2. Folder **sass** zawiera trzy pod foldery:

- bootstrap
- components, w którym dokonujemy zmian stylów
- fontawesome

3. Folder **sass/component** zawiera pliki nazwane zgodnie z nazwami poszczególnych sekcji i elementów strony.

4. Folder **partial** zawiera pliki nazwane zgodnie z nazwami poszczególnych sekcji. W szczególnosci można wyróżnić trzy podstawowe podkategorie:

- header
- section-(nazwa_sekcji)
- footer

5. Obrazki w folderze **images** nazwane są zgodnie z nazwą sekcji, dodatkowo posiadają cyfrę spełniającą rolę licznika.

## Wykorzystanie

Powyższy projekt można wykorzystać jako stronę sklepu meblowego lub po odpowiednich modyfikacjach innego rodzaju sklepu, również można go wykorzystać do dalszych celów naukowych.

## Troubleshooting

Podczas pracy nad projektem wystąpiła konieczność częstego uruchamiania task runnera w Git Bashu, jeśli pracuje się na Windowsie.
