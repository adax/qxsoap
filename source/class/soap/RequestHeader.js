
qx.Class.define("soap.RequestHeader", { extend: qx.core.Object
    ,properties: {
         _sort_key : {check: "String", nullable: true, init: null}
        ,_sort_ord : {check: "String", nullable: true, init: null}
        ,_start_row : {check: "Integer", nullable: true, init: 0}
    }
});
