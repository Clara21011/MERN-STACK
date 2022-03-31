const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    FirstName: {
        type: String,
        required: [true, "First name is required"],
    },
    LastName: {
        type: String,
        required: [true, "Last name is required"],
    },
    profilePhoto: {
        type: String,
        default: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
    },
    email: {
        type: String,
        required: [true, "Email is required"],
    },
    bio: {
        type: String,
    },
    password: {
        type: String,
        required: [true, "Password is required"],
    },
    postCount: {
        type: Number,
        default: 0,
    },
    isBlocked: {
        type: Boolean,
        default: false,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    role:{
        type: String,
        enum: ['Admin', 'Guest', 'Blogger'],
    },
    isFollowing:{
        type: Boolean,
        default: false,
    },
    isUnFollowing:{
        type: Boolean,
        default: false,
    }, 
    isAccountVerified:{
        type: Boolean,
        default: false,
    },
    accountVerificationToken: String,
    accountVerificationTokenExpires: Date,
    viewedBy: {
        type : [
          {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
          }
       ],
    },
    followers: {
        type : [
            {
              type: mongoose.Schema.Types.ObjectId,
              ref: "User",
            }
         ],      
    },
    following: {
        type : [
            {
              type: mongoose.Schema.Types.ObjectId,
              ref: "User",
            }
         ],      
    },  
    passwordChanged: Date,
    passwordRessetToken: String,
    passwordResetExpires: Date,

    active:{
        type: Boolean,
        default: false,
    },
  },
  {
       toJSON:{
           virtuals: true,
       },
       toObject: {
           virtuals: true,
       },
       timestamps: true,
  }
);

// Hash password

userSchema.pre('save', async function(next) {
    //hash password. Bcrypt function
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

// match password
userSchema.methods.isPasswordMatched = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};


// Compile Schema into model
     
const User = mongoose.model('User', userSchema);  

module.exports = User; 