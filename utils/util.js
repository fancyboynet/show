module.exports = {
    formatDate : function(date){
        return [date.getFullYear(), '.', date.getMonth() + 1, '.', date.getDate(), ' ', date.getHours(), ':', date.getMinutes()].join('');
    },
    getPageRange : function(total, pageRecords, page){
        var start = 0,
            end = 0;
        total = parseInt(total, 10);
        pageRecords = parseInt(pageRecords, 10);
        page = parseInt(page, 10);
        if(isNaN(total)){
            throw "无效参数[total]";
        }
        if(isNaN(pageRecords)){
            throw "无效参数[pageRecords]";
        }
        if(isNaN(page)){
            throw "无效参数[page]";
        }
        var totalPages = Math.ceil(total / pageRecords);
        page = Math.min(Math.max(1, page), totalPages);
        start = (page - 1) * pageRecords;
        end = Math.min(total, start + pageRecords) - 1;

        return {
            range : [start, end],
            totalPages : totalPages
        };
    },
    groupArray : function(arr, size){
        var output = [];
        var group = [];
        var len = arr.length;
        arr.forEach(function(v, i){
            group.push(v);
            if((i === len - 1) || ((i + 1) % size === 0)){
                output.push(group);
                group = [];
            }
        });
        return output;
    }
};