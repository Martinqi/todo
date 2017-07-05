/**
 * Created by Administrator on 2017/7/4.
 */
angular.module("myapp",[])
    .controller("todo",["$scope",function ($scope) {
        $scope.date=localStorage.message?JSON.parse(localStorage.message):[];
        $scope.add=function(){
            let obj={};
            obj.id=maxid();
            obj.name="新建列表";
            obj.son=[];
            obj.done=false;
            $scope.date.push(obj);
            localStorage.message=JSON.stringify($scope.date);
        };
        function maxid(){
           let id=0;
           let temp=0;
            if($scope.date.length==0){
                id=1;
            }else{
                for(let i=0;i<$scope.date.length;i++){
                    if($scope.date[i].id>temp){
                        temp=$scope.date[i].id
                    }
                }
                id=temp+1;
            }
            return id;
        }
    }]);