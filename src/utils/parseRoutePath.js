export function parseRoutePath (Path) {
    const routeParametersRegex = /:([a-zA-Z]+)/g;

    const params = Path.replaceAll(routeParametersRegex, "(?<$1>[a-z0-9-_]+)");

    const pathRegex = new RegExp(`^${params}(?<query>\\?(.*))?$`);
    
    return pathRegex;

}