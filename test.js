/* Given a string S that consists of only alphanumeric characters and dashes. The string is separated into N + 1 groups by N dashes. 
Also given an integer K. We want to reformat the string S, such that each group contains exactly K characters, except for the first group, 
which could be shorter than K but still must contain at least one character. 
Furthermore, a dash must be inserted between two groups, and you should convert all lowercase letters to uppercase.

Examples:
Input: S = “5F3Z-2e-9-w”, K = 4
Output: “5F3Z-2E9W”
Explanation: The string S has been split into two parts,
each part has 4 characters.
Note that two extra dashes are not needed and can be removed.
Input: S = “2-5g-3-J”, K = 2
Output: “2-5G-3J”
Explanation: The string s has been split into three parts,
each part has 2 characters except the first part
as it could be shorter as mentioned above */

function smth(S, K){

    const groups = S.split('-');
    let sum = 0;
    let newStr = '';
    let residual = '';
    for (let i=groups.length; i>=0; i--){
        if(i=0){
            newStr = groups[i] + '-' + newStr
        } else {
            if(groups[i].length > K){
                newGroup = ''
                for(let j=groups[i].length; j>groups[i].length - K;j--){
                    newGroup = groups[i][j] + newGroup
                }
                if(groups[i].length - K > K){
                    for(let j=0; j<groups[i].length;j++){
                        residual += groups[i][j]
                    }
                }
                if(i == groups.length){
                    newStr = newStr + '-' + newGroup 
                } else{
                    newStr = '-' + newGroup + newStr 
                }
                
            } else {
                //if groups
            }

        }
    }




}