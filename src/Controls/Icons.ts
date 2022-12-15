export interface IconsInterface {
  profile: string;
  noMic: string;
  noCam: string;
  pinnedLayout: string;
  gridLayout: string;
}

const icons: IconsInterface = {
  profile:
    'data:image/png;base64,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',
  noMic:
    'data:image/png;base64,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',
  noCam:
    'data:image/png;base64,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',
  pinnedLayout:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFuSURBVHgB7dzBTQJBFIfxeQtBuVHCtmAFSicSTt7swFgCBRi0EiyBErYEb64E58lKYri8/Sfqgd39fifImw3hy8xlDpsSAABdZW3D2dpnHzk/HD7eNl/TL7wvRz+/MX369HQGzGybPa/q5fhZro0Gl2svLefN4WOZ/uAcA52ofLeb13fTKlpQhI8ed06Z+q20yWTTnJRoQRjIjsdqCMp6v7+PhkVCstHoOpoRqOF+E40IJBBIIJBAIIFAAoEEAgkEEggkEEggkEAgYRwNTi+6howdJBBICI/Yf90fd/2osoMEAgkEEggkEEggkEAggUACgQQCCQQSCCQQSCCQQCCBQAKBBC7tBXaQQCCBS3uBHSQQSCCQQCCBQAKBBAIJBBIIJBBIIJBAIIFADbNtNGoL9JYGwj2volkcqKVqz1RtLxgIA7nZonk49dv3iwXaFoSB6oVVXhRzd39JPQt1+E+vnvPjRVFctb11AQCAbvsCS61W9paa/pgAAAAASUVORK5CYII=',
  gridLayout:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEZSURBVHgB7dzBDYJAEEDR1Qq0A1qwBCuzBGMFaiW2YAfagXawjokHYmB/IhgE/0smHjbM4Us4cCAlSZImKee8iNnG3PKH3vb1oqedl5h9TFVqMCvEqeLnFFOlDmahtjOnHvS88xqzjpXXpsN54cJN6hhnJKqYfdth6Q76xX/7WzvvsXLZdDBPelq0HRgIGAgYCBgIGAgYCBgIGAgYCBgIGAgYCBhI0pB8o9iws86HNDAQMBAwEDAQMBAwEDAQMBAwEDAQMBAwEDAQMBAwEDCQpCH50r5hZ50PaWAgYCBgIGAgYCBgIGAgYCBgIGAgYCBgIFAKdE8qBjqn/3FoO/DDAp9+WOB1wTrm+FoyNc9HyC5m1RZHkqRxewD9wBbfql+gGwAAAABJRU5ErkJggg==',
};

export default icons;
