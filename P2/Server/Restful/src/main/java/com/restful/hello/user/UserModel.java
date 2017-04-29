package com.restful.hello.user;

import org.springframework.data.repository.CrudRepository;

public interface UserModel  extends CrudRepository<ApiUser, Integer> {
    public ApiUser findByEmail(String email);
}



/*

	ArrayList<Api_user> users = new ArrayList<>();

    public GameModel(){

        this.users.add(new Api_user("0","Mohamed","mhmeeaad@gmail.com","000","teacher"));
    }

    public boolean isValidNewEmail(String email){
        for (int i = 0; i < users.size(); i++) {
            if(users.get(i).getEmail().equals(email) )return false;
        }
        return true;
    }

    public Api_user authUser(String email , String pw){

        for (int i = 0; i < this.users.size(); i++) {
            logger.info("api :" + users.get(i).getPw()+ "test");
            if(this.users.get(i).getEmail().equals(email) && this.users.get(i).getPw().equals(pw) )
                return this.users.get(i);
        }
        return null;
    }

	public void addUser(Api_user users){

        this.users.add(users);
	}

 */