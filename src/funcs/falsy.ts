export const isUndefined = function(v : any){
    return typeof(v) === 'undefined';
};

export const isFalse = function(v : any){
    return v === false;
};

export const isNull = function(v : any){
    return v === null;
};

export const isFalsy = function(v : any){
    if(!v) return true;
    else return false;
};

export const isNonApplicable = function(v : any){
    return (isUndefined(v) || isNull(v) || isNaN(v));
};